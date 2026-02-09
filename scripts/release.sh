#!/bin/bash

# Release script for gocode-check
# Usage: ./scripts/release.sh <version>
# Example: ./scripts/release.sh 1.0.0

set -e

VERSION=$1

if [ -z "$VERSION" ]; then
    echo "Error: Version number required"
    echo "Usage: ./scripts/release.sh <version>"
    echo "Example: ./scripts/release.sh 1.0.0"
    exit 1
fi

# Validate version format (semantic versioning)
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Invalid version format. Use semantic versioning (e.g., 1.0.0)"
    exit 1
fi

TAG="v${VERSION}"

echo "🚀 Preparing release ${TAG}"
echo ""

# Check if working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: Working directory is not clean"
    echo "Uncommitted changes:"
    git status --short
    echo ""
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: Not on main branch (current: ${CURRENT_BRANCH})"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Run tests
echo "🧪 Running tests..."
if ! go test ./...; then
    echo "❌ Tests failed. Fix them before releasing."
    exit 1
fi
echo "✅ Tests passed"
echo ""

# Update VERSION file
echo "📝 Updating VERSION file to ${VERSION}"
echo "$VERSION" > VERSION

# Check if CHANGELOG has entry for this version
if ! grep -q "## \[${VERSION}\]" CHANGELOG.md; then
    echo "⚠️  Warning: CHANGELOG.md does not have an entry for version ${VERSION}"
    echo "Please add release notes to CHANGELOG.md before continuing."
    read -p "Open CHANGELOG.md in editor? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        ${EDITOR:-nano} CHANGELOG.md
    fi
fi

# Commit version change
echo "📦 Committing version changes..."
git add VERSION CHANGELOG.md
if git diff --cached --quiet; then
    echo "No changes to commit"
else
    git commit -m "chore: bump version to ${TAG}"
fi

# Push changes to main
echo "⬆️  Pushing changes to main..."
git push origin main

# Check if tag already exists
if git rev-parse "$TAG" >/dev/null 2>&1; then
    echo "⚠️  Tag $TAG already exists locally"
    read -p "Delete and recreate? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git tag -d "$TAG"
        git push origin ":refs/tags/$TAG" 2>/dev/null || true
    else
        exit 1
    fi
fi

# Create annotated tag
echo "🏷️  Creating tag ${TAG}..."
git tag -a "$TAG" -m "Release ${TAG}"

# Push tag
echo "⬆️  Pushing tag ${TAG}..."
git push origin "$TAG"

echo ""
echo "✅ Release ${TAG} created successfully!"
echo ""
echo "📋 Next steps:"
echo "  1. Monitor GitHub Actions: https://github.com/eduardotorresdev/gocode-check/actions"
echo "  2. Check release page: https://github.com/eduardotorresdev/gocode-check/releases/tag/${TAG}"
echo "  3. Verify binaries are uploaded correctly"
echo "  4. Test installation: go install github.com/eduardotorresdev/gocode-check/cmd/gocodecheck@${TAG}"
echo ""
