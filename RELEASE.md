# Creating a Release

This guide shows how to create a new release for gocode-check.

## Prerequisites

- Git installed and configured
- Push access to the repository
- All changes committed and pushed to main branch
- Tests passing (`go test ./...`)

## Release Process

### 1. Update Version Files

Update the following files with the new version number:

- `VERSION` - Update to new version (e.g., `1.0.0`)
- `CHANGELOG.md` - Add release notes for the new version

### 2. Commit Version Changes

```bash
# Commit version updates
git add VERSION CHANGELOG.md
git commit -m "chore: bump version to v1.0.0"
git push origin main
```

### 3. Create and Push Git Tag

The GitHub Actions workflow is triggered by version tags:

```bash
# Create an annotated tag
git tag -a v1.0.0 -m "Release v1.0.0"

# Push the tag to GitHub
git push origin v1.0.0
```

### 4. Wait for Release Build

The GitHub Actions workflow (`.github/workflows/release.yml`) will automatically:

1. Run all tests
2. Build binaries for multiple platforms:
   - Linux AMD64
   - Linux ARM64
   - macOS AMD64 (Intel)
   - macOS ARM64 (Apple Silicon)
   - Windows AMD64
3. Generate SHA256 checksums
4. Create a GitHub Release with:
   - Release notes from CHANGELOG
   - All compiled binaries
   - Checksums file

### 5. Verify Release

1. Go to https://github.com/eduardotorresdev/gocode-check/releases
2. Verify the new release appears
3. Check that all binaries are attached
4. Verify checksums.txt is present

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR.MINOR.PATCH** (e.g., 1.0.0)
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## Example: Creating v1.0.0

```bash
# 1. Update files
echo "1.0.0" > VERSION
# Edit CHANGELOG.md to add v1.0.0 notes

# 2. Commit changes
git add VERSION CHANGELOG.md
git commit -m "chore: bump version to v1.0.0"
git push origin main

# 3. Create and push tag
git tag -a v1.0.0 -m "Release v1.0.0 - Initial stable release"
git push origin v1.0.0

# 4. Wait for GitHub Actions to complete
# Check: https://github.com/eduardotorresdev/gocode-check/actions

# 5. Verify release
# Visit: https://github.com/eduardotorresdev/gocode-check/releases
```

## Troubleshooting

### Release workflow failed

1. Check GitHub Actions logs: https://github.com/eduardotorresdev/gocode-check/actions
2. Common issues:
   - Tests failing: Fix tests and re-tag
   - Build errors: Check Go version compatibility
   - Permission errors: Verify GITHUB_TOKEN permissions

### Need to re-release same version

If you need to recreate a release:

```bash
# Delete the tag locally and remotely
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0

# Delete the release on GitHub
# Go to Releases page and delete the release

# Create the tag again
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Update existing release

If the release already exists but you want to update it:

1. Go to the release page on GitHub
2. Click "Edit release"
3. Update the description or upload new assets
4. Click "Update release"

## Post-Release

After a successful release:

1. Announce the release:
   - Update project documentation
   - Post on relevant channels
   - Update examples if needed

2. Verify installation works:
   ```bash
   go install github.com/eduardotorresdev/gocode-check/cmd/gocodecheck@v1.0.0
   ```

3. Start working on next version:
   - Create new `[Unreleased]` section in CHANGELOG.md
   - Plan next features/fixes

## Quick Reference

```bash
# Check current version
cat VERSION

# List all tags
git tag -l

# View tag details
git show v1.0.0

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin :refs/tags/v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Release message"

# Push tag
git push origin v1.0.0

# Push all tags
git push origin --tags
```
