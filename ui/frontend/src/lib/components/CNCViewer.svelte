<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { sessions } from '../state/sessions.svelte.js';
  import { flow } from '../state/flow.svelte.js';
  
  let container;
  let scene, camera, renderer, controls;
  let toolPathWorking = null; // Green path for cutting operations
  let toolPathMoving = null;  // Red path for rapid moves
  let toolMesh = null;
  let toolBit = null;
  let toolGlow = null;  // Glow effect at tool tip
  let gridHelper = null;
  let workpiece = null;
  let cutMarks = null;
  let drillHoles = [];
  let animationId = null;
  let toolRotation = 0;
  let lastToolPathLength = 0;
  let cutMaterial = null;
  
  // Scale configuration: 3m view width
  const VIEW_WIDTH = 3000; // 3000mm = 3m
  const WORKPIECE_SIZE = 2000; // 2m x 2m workpiece
  const WORKPIECE_THICKNESS = 50; // 50mm thick
  const PATH_LINE_WIDTH = 3; // Thicker path lines
  
  onMount(() => {
    initScene();
    animate();
    
    // Handle resize
    window.addEventListener('resize', onResize);
  });
  
  onDestroy(() => {
    window.removeEventListener('resize', onResize);
    if (animationId) cancelAnimationFrame(animationId);
    if (controls) controls.dispose();
    if (cutMaterial) cutMaterial.dispose();
    if (renderer) renderer.dispose();
  });
  
  function initScene() {
    // Scene with white background
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    // Camera - positioned to look at XY plane from above (Z is up)
    // Camera is at (1500, -1500, 1500) - positive X, negative Y, positive Z
    // This places the camera on the "front-left" corner looking at the origin
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
    camera.position.set(1500, -1500, 1500);
    camera.up.set(0, 0, 1); // Z is up
    camera.lookAt(0, 0, 0);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // OrbitControls for interaction - allow full 360 rotation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 200;
    controls.maxDistance = 5000;
    // Remove polar angle restriction - allow full 360 degree rotation
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.target.set(0, 0, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x606060, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(500, -500, 1000);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Add secondary light for better visibility
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-500, 500, 500);
    scene.add(directionalLight2);
    
    // Grid on XY plane (Z=0 is the workpiece surface) - lighter grid for white background
    gridHelper = new THREE.GridHelper(VIEW_WIDTH, 30, 0xcccccc, 0xe0e0e0);
    gridHelper.rotation.x = Math.PI / 2; // Rotate to XY plane
    gridHelper.position.z = 0.5; // Slightly above workpiece surface
    scene.add(gridHelper);
    
    // Axes helper - Z is up
    const axesHelper = new THREE.AxesHelper(300);
    scene.add(axesHelper);
    
    // Workpiece (on XY plane, Z down) - black color
    createWorkpiece();
    
    // Milling cutter tool (above workpiece, Z positive)
    createMillingTool();
    
    // Cut marks container
    cutMarks = new THREE.Group();
    scene.add(cutMarks);
    
    // Pre-create cut material
    cutMaterial = new THREE.MeshBasicMaterial({
      color: 0x3a3a3a,
      transparent: true,
      opacity: 0.9,
    });
  }
  
  function createWorkpiece() {
    // Workpiece material - black color
    const workpieceMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, // Dark black
      roughness: 0.6,
      metalness: 0.2,
    });
    
    // Create workpiece geometry - lies on XY plane, extends down in Z
    const workpieceGeometry = new THREE.BoxGeometry(
      WORKPIECE_SIZE, 
      WORKPIECE_SIZE, 
      WORKPIECE_THICKNESS
    );
    workpiece = new THREE.Mesh(workpieceGeometry, workpieceMaterial);
    workpiece.position.z = -WORKPIECE_THICKNESS / 2; // Top surface at Z=0
    workpiece.receiveShadow = true;
    scene.add(workpiece);
  }
  
  function createMillingTool() {
    // Tool holder (spindle body)
    const holderGroup = new THREE.Group();
    
    // Spindle body
    const holderGeometry = new THREE.CylinderGeometry(20, 25, 80, 16);
    const holderMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      metalness: 0.8,
      roughness: 0.3,
    });
    const holder = new THREE.Mesh(holderGeometry, holderMaterial);
    holder.position.z = 60;
    holderGroup.add(holder);
    
    // Collet
    const colletGeometry = new THREE.CylinderGeometry(12, 15, 20, 16);
    const colletMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.9,
      roughness: 0.2,
    });
    const collet = new THREE.Mesh(colletGeometry, colletMaterial);
    collet.position.z = 15;
    holderGroup.add(collet);
    
    // Milling bit (the cutter) - textured cylinder
    const bitGroup = new THREE.Group();
    
    // Shank
    const shankGeometry = new THREE.CylinderGeometry(5, 5, 30, 16);
    const bitMaterial = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.9,
      roughness: 0.1,
    });
    const shank = new THREE.Mesh(shankGeometry, bitMaterial);
    shank.position.z = -10;
    bitGroup.add(shank);
    
    // Textured cutting cylinder with spiral flutes
    const fluteRadius = 8;
    const fluteHeight = 25;
    const numFlutes = 4;
    
    // Create main cutting body as a cylinder
    const cuttingGeometry = new THREE.CylinderGeometry(fluteRadius, fluteRadius, fluteHeight, 32);
    const cuttingMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x002211,
    });
    const cuttingBody = new THREE.Mesh(cuttingGeometry, cuttingMaterial);
    cuttingBody.position.z = -35;
    bitGroup.add(cuttingBody);
    
    // Add visible flute grooves (dark stripes around the cylinder)
    for (let i = 0; i < numFlutes; i++) {
      const angle = (i / numFlutes) * Math.PI * 2;
      const grooveGeometry = new THREE.BoxGeometry(2, fluteHeight, fluteRadius * 0.3);
      const grooveMaterial = new THREE.MeshStandardMaterial({
        color: 0x004422,
        metalness: 0.6,
        roughness: 0.4,
      });
      const groove = new THREE.Mesh(grooveGeometry, grooveMaterial);
      // Position groove on cylinder surface
      groove.position.set(fluteRadius * 0.85, 0, 0);
      
      // Create a pivot group to rotate the groove around the cylinder
      const groovePivot = new THREE.Group();
      groovePivot.add(groove);
      groovePivot.position.z = -35;
      groovePivot.rotation.x = Math.PI / 2;
      groovePivot.rotation.z = angle;
      
      bitGroup.add(groovePivot);
    }
    
    // Tip
    const tipGeometry = new THREE.ConeGeometry(fluteRadius, 10, 8);
    const tipMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x002211,
    });
    const tip = new THREE.Mesh(tipGeometry, tipMaterial);
    tip.rotation.x = Math.PI; // Point down
    tip.position.z = -52;
    bitGroup.add(tip);
    
    // Glow effect at the tool tip
    const glowGeometry = new THREE.SphereGeometry(12, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
    });
    toolGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    toolGlow.position.z = -57; // At the tip
    bitGroup.add(toolGlow);
    
    toolBit = bitGroup;
    holderGroup.add(bitGroup);
    
    toolMesh = holderGroup;
    toolMesh.castShadow = true;
    scene.add(toolMesh);
  }
  
  function onResize() {
    if (!container || !camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Update controls
    if (controls) controls.update();
    
    // Get current machine state from active session
    const machine = sessions.machine;
    
    // Update tool position
    if (toolMesh && machine.position) {
      toolMesh.position.set(
        machine.position.X ?? 0,
        machine.position.Y ?? 0,
        (machine.position.Z ?? 0) + 100 // Offset for tool holder
      );
      
      // Rotate the tool bit when spindle is on AND flow is not paused (playing or stepping)
      if (machine.spindleOn && toolBit && !flow.isPaused) {
        const direction = machine.spindleCW ? 1 : -1;
        toolRotation += 0.15 * direction;
        toolBit.rotation.z = toolRotation;
      }
      
      // Animate glow effect
      if (toolGlow) {
        const time = Date.now() * 0.003;
        toolGlow.material.opacity = 0.4 + Math.sin(time) * 0.2;
        toolGlow.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
      }
    }
    
    // Update tool path and cut marks
    updateToolPath();
    updateCutMarks();
    
    renderer.render(scene, camera);
  }
  
  function updateToolPath() {
    // Get tool path from active session
    const path = sessions.toolPath;
    const currentIndex = sessions.currentIndex;
    
    // Remove old paths if session changed or path significantly changed
    if ((toolPathWorking || toolPathMoving) && (path.length < lastToolPathLength || path.length === 0)) {
      if (toolPathWorking) {
        scene.remove(toolPathWorking);
        toolPathWorking.geometry.dispose();
        toolPathWorking.material.dispose();
        toolPathWorking = null;
      }
      if (toolPathMoving) {
        scene.remove(toolPathMoving);
        toolPathMoving.geometry.dispose();
        toolPathMoving.material.dispose();
        toolPathMoving = null;
      }
      lastToolPathLength = 0;
    }
    
    if (path.length < 2) {
      lastToolPathLength = path.length;
      return;
    }
    
    // Only update if path changed - check if any path exists to update
    if (path.length === lastToolPathLength) {
      return;
    }
    
    // Remove old paths
    if (toolPathWorking) {
      scene.remove(toolPathWorking);
      toolPathWorking.geometry.dispose();
      toolPathWorking.material.dispose();
      toolPathWorking = null;
    }
    if (toolPathMoving) {
      scene.remove(toolPathMoving);
      toolPathMoving.geometry.dispose();
      toolPathMoving.material.dispose();
      toolPathMoving = null;
    }
    
    // Separate points for working and moving paths
    const workingSegments = [];
    const movingSegments = [];
    
    for (let i = 1; i < path.length; i++) {
      const prev = path[i - 1];
      const curr = path[i];
      const isPast = i <= currentIndex;
      
      const segment = {
        points: [
          new THREE.Vector3(prev.x, prev.y, prev.z),
          new THREE.Vector3(curr.x, curr.y, curr.z)
        ],
        isPast
      };
      
      if (curr.isCut) {
        workingSegments.push(segment);
      } else {
        movingSegments.push(segment);
      }
    }
    
    // Create working path (green) - separate line object
    if (workingSegments.length > 0) {
      const workingPoints = [];
      const workingColors = [];
      for (const seg of workingSegments) {
        workingPoints.push(...seg.points);
        const greenIntensity = 0.8 * (seg.isPast ? 1.0 : 0.3);
        // Add green color for both start and end points of segment
        workingColors.push(0, greenIntensity, 0);
        workingColors.push(0, greenIntensity, 0);
      }
      
      const workingGeometry = new THREE.BufferGeometry().setFromPoints(workingPoints);
      workingGeometry.setAttribute('color', new THREE.Float32BufferAttribute(workingColors, 3));
      
      const workingMaterial = new THREE.LineBasicMaterial({ 
        vertexColors: true,
        linewidth: PATH_LINE_WIDTH
      });
      
      toolPathWorking = new THREE.LineSegments(workingGeometry, workingMaterial);
      scene.add(toolPathWorking);
    }
    
    // Create moving path (red) - separate line object
    if (movingSegments.length > 0) {
      const movingPoints = [];
      const movingColors = [];
      for (const seg of movingSegments) {
        movingPoints.push(...seg.points);
        const redIntensity = 0.8 * (seg.isPast ? 1.0 : 0.3);
        // Add red color for both start and end points of segment
        movingColors.push(redIntensity, 0, 0);
        movingColors.push(redIntensity, 0, 0);
      }
      
      const movingGeometry = new THREE.BufferGeometry().setFromPoints(movingPoints);
      movingGeometry.setAttribute('color', new THREE.Float32BufferAttribute(movingColors, 3));
      
      const movingMaterial = new THREE.LineBasicMaterial({ 
        vertexColors: true,
        linewidth: PATH_LINE_WIDTH
      });
      
      toolPathMoving = new THREE.LineSegments(movingGeometry, movingMaterial);
      scene.add(toolPathMoving);
    }
    
    lastToolPathLength = path.length;
  }
  
  function updateCutMarks() {
    const path = sessions.toolPath;
    const currentIndex = sessions.currentIndex;
    
    // Clear cut marks if session changed (path reset)
    if (path.length < cutMarks.children.length) {
      while (cutMarks.children.length > 0) {
        const child = cutMarks.children[0];
        cutMarks.remove(child);
        if (child.geometry) child.geometry.dispose();
      }
      drillHoles = [];
    }
    
    // Create cut marks for cutting movements up to current index
    for (let i = cutMarks.children.length; i < path.length && i <= currentIndex + 1; i++) {
      const p = path[i];
      const prev = path[i - 1];
      
      if (p.isCut && prev && p.z <= 0) {
        // Create a groove/cut mark
        if (p.type === 'LinearCut') {
          createLinearCutMark(prev, p);
        } else if (p.type === 'DrillCycle') {
          createDrillHole(p);
        } else if (p.type === 'ArcCW' || p.type === 'ArcCCW') {
          // TODO: Implement proper arc rendering with curved paths
          // For now, render as a straight line between endpoints
          createLinearCutMark(prev, p);
        }
      }
    }
  }
  
  function createLinearCutMark(from, to) {
    // Calculate cut path
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    if (length < 1) return;
    
    // Create a groove that shows material removal
    const cutWidth = 8; // Width of the cut
    const cutDepth = Math.min(Math.abs(to.z), WORKPIECE_THICKNESS);
    
    const cutGeometry = new THREE.BoxGeometry(length, cutWidth, cutDepth + 1);
    const cutMark = new THREE.Mesh(cutGeometry, cutMaterial);
    
    // Position and rotate
    cutMark.position.set(
      (from.x + to.x) / 2,
      (from.y + to.y) / 2,
      -cutDepth / 2
    );
    cutMark.rotation.z = Math.atan2(dy, dx);
    
    cutMarks.add(cutMark);
  }
  
  function createDrillHole(point) {
    const holeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
    });
    
    const depth = Math.min(Math.abs(point.z), WORKPIECE_THICKNESS);
    const holeGeometry = new THREE.CylinderGeometry(8, 8, depth + 1, 16);
    const hole = new THREE.Mesh(holeGeometry, holeMaterial);
    hole.position.set(point.x, point.y, -depth / 2);
    
    cutMarks.add(hole);
    drillHoles.push(hole);
  }
  
  // Format position value with unit
  function formatPosition(value, unit = 'mm') {
    const v = value?.toFixed(3) ?? '0.000';
    return `${v}`;
  }
  
  // Reactive getters
  $effect(() => {
    // This effect runs whenever active session changes
    // Reset cut marks when session changes
    const activeId = sessions.activeId;
    if (activeId) {
      // Clear all cut marks for fresh render
      while (cutMarks && cutMarks.children.length > 0) {
        const child = cutMarks.children[0];
        cutMarks.remove(child);
        if (child.geometry) child.geometry.dispose();
      }
      drillHoles = [];
      lastToolPathLength = 0;
    }
  });
</script>

<div class="cnc-viewer" bind:this={container}>
  <div class="position-display">
    <div class="unit-badge">{sessions.machine.unit}</div>
    <div class="axis">
      <span class="label">X</span>
      <span class="value">{formatPosition(sessions.machine.position.X)}</span>
    </div>
    <div class="axis">
      <span class="label">Y</span>
      <span class="value">{formatPosition(sessions.machine.position.Y)}</span>
    </div>
    <div class="axis">
      <span class="label">Z</span>
      <span class="value">{formatPosition(sessions.machine.position.Z)}</span>
    </div>
    {#if sessions.machine.spindleOn}
      <div class="spindle-indicator">
        <span class="label">🔄</span>
        <span class="value">{sessions.machine.spindle} RPM</span>
      </div>
    {/if}
  </div>
  
  <div class="scale-ruler">
    <div class="ruler-bar"></div>
    <span class="ruler-label">500mm</span>
  </div>
  
  <div class="path-legend">
    <div class="legend-item">
      <span class="legend-color working"></span>
      <span class="legend-text">Cutting (Z ↓)</span>
    </div>
    <div class="legend-item">
      <span class="legend-color moving"></span>
      <span class="legend-text">Rapid (Z ↑)</span>
    </div>
  </div>
  
  <div class="stats">
    <span>Events: {sessions.stats.total}</span>
    <span>Rapid: {sessions.stats.rapidMoves}</span>
    <span>Cuts: {sessions.stats.linearCuts}</span>
    <span>Arcs: {sessions.stats.arcs}</span>
  </div>
  
  <div class="controls-hint">
    <span>🖱️ Drag to rotate • Scroll to zoom • Shift+Drag to pan</span>
  </div>
</div>

<style>
  .cnc-viewer {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--bg-primary);
  }
  
  .position-display {
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm);
    font-family: var(--font-mono);
    font-size: 14px;
    z-index: 10;
  }
  
  .unit-badge {
    font-size: 10px;
    padding: 2px 6px;
    background: var(--accent-cyan);
    color: var(--bg-primary);
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: var(--spacing-xs);
  }
  
  .axis {
    display: flex;
    gap: var(--spacing-sm);
  }
  
  .axis .label {
    color: var(--text-muted);
    width: 16px;
  }
  
  .axis .value {
    color: var(--accent-cyan);
  }
  
  .spindle-indicator {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xs);
    padding-top: var(--spacing-xs);
    border-top: 1px solid var(--border-color);
  }
  
  .spindle-indicator .label {
    animation: spin 1s linear infinite;
  }
  
  .spindle-indicator .value {
    color: var(--accent-yellow);
    font-size: 12px;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .scale-ruler {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    z-index: 10;
  }
  
  .ruler-bar {
    width: 100px;
    height: 4px;
    background: var(--accent-green);
    border-radius: 2px;
    position: relative;
  }
  
  .ruler-bar::before,
  .ruler-bar::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 10px;
    background: var(--accent-green);
    top: -3px;
  }
  
  .ruler-bar::before {
    left: 0;
  }
  
  .ruler-bar::after {
    right: 0;
  }
  
  .ruler-label {
    font-size: 10px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }
  
  .stats {
    position: absolute;
    bottom: var(--spacing-md);
    left: var(--spacing-md);
    display: flex;
    gap: var(--spacing-md);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 12px;
    color: var(--text-secondary);
    z-index: 10;
  }
  
  .controls-hint {
    position: absolute;
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 10px;
    color: var(--text-muted);
    z-index: 10;
  }
  
  .path-legend {
    position: absolute;
    top: var(--spacing-md);
    right: calc(var(--spacing-md) + 150px);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    z-index: 10;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .legend-color {
    width: 20px;
    height: 4px;
    border-radius: 2px;
  }
  
  .legend-color.working {
    background: #00cc00;
  }
  
  .legend-color.moving {
    background: #cc0000;
  }
  
  .legend-text {
    font-size: 10px;
    color: var(--text-secondary);
  }
</style>
