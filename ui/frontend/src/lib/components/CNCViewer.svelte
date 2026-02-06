<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { events } from '../state/events.svelte.js';
  import { machine } from '../state/machine.svelte.js';
  
  let container;
  let scene, camera, renderer, controls;
  let toolPathLine = null;
  let toolMesh = null;
  let toolBit = null;
  let gridHelper = null;
  let workpiece = null;
  let cutMarks = null;
  let drillHoles = [];
  let animationId = null;
  let toolRotation = 0;
  
  // Scale configuration: 3m view width
  const VIEW_WIDTH = 3000; // 3000mm = 3m
  const WORKPIECE_SIZE = 2000; // 2m x 2m workpiece
  const WORKPIECE_THICKNESS = 50; // 50mm thick
  
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
    if (renderer) renderer.dispose();
  });
  
  function initScene() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    // Camera - orthographic-like view with perspective
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
    camera.position.set(1500, 1500, 1500);
    camera.lookAt(0, 0, 0);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // OrbitControls for interaction
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 200;
    controls.maxDistance = 5000;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(500, 1000, 500);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Grid
    gridHelper = new THREE.GridHelper(VIEW_WIDTH, 30, 0x3a3a4a, 0x2a2a3a);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.z = -WORKPIECE_THICKNESS;
    scene.add(gridHelper);
    
    // Axes helper
    const axesHelper = new THREE.AxesHelper(300);
    scene.add(axesHelper);
    
    // Workpiece (floor)
    createWorkpiece();
    
    // Milling cutter tool
    createMillingTool();
    
    // Cut marks container
    cutMarks = new THREE.Group();
    scene.add(cutMarks);
  }
  
  function createWorkpiece() {
    // Workpiece material
    const workpieceMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B7355, // Brown wood-like color
      roughness: 0.8,
      metalness: 0.1,
    });
    
    // Create workpiece geometry
    const workpieceGeometry = new THREE.BoxGeometry(
      WORKPIECE_SIZE, 
      WORKPIECE_SIZE, 
      WORKPIECE_THICKNESS
    );
    workpiece = new THREE.Mesh(workpieceGeometry, workpieceMaterial);
    workpiece.position.z = -WORKPIECE_THICKNESS / 2;
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
    holder.rotation.x = Math.PI / 2;
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
    collet.rotation.x = Math.PI / 2;
    collet.position.z = 15;
    holderGroup.add(collet);
    
    // Milling bit (the cutter)
    const bitGroup = new THREE.Group();
    
    // Shank
    const shankGeometry = new THREE.CylinderGeometry(5, 5, 30, 16);
    const bitMaterial = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.9,
      roughness: 0.1,
    });
    const shank = new THREE.Mesh(shankGeometry, bitMaterial);
    shank.rotation.x = Math.PI / 2;
    shank.position.z = -10;
    bitGroup.add(shank);
    
    // Cutting flutes (spiral pattern approximation)
    const fluteGeometry = new THREE.CylinderGeometry(4, 8, 25, 4);
    const fluteMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x004422,
    });
    const flutes = new THREE.Mesh(fluteGeometry, fluteMaterial);
    flutes.rotation.x = Math.PI / 2;
    flutes.position.z = -35;
    bitGroup.add(flutes);
    
    // Tip
    const tipGeometry = new THREE.ConeGeometry(8, 10, 8);
    const tip = new THREE.Mesh(tipGeometry, fluteMaterial);
    tip.rotation.x = -Math.PI / 2;
    tip.position.z = -52;
    bitGroup.add(tip);
    
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
    
    // Update tool position
    if (toolMesh && machine.position) {
      toolMesh.position.set(
        machine.position.X ?? 0,
        machine.position.Y ?? 0,
        (machine.position.Z ?? 0) + 100
      );
      
      // Rotate the tool bit when spindle is on
      if (machine.spindleOn && toolBit) {
        const direction = machine.spindleCW ? 1 : -1;
        toolRotation += 0.15 * direction;
        toolBit.rotation.z = toolRotation;
      }
    }
    
    // Update tool path and cut marks
    updateToolPath();
    updateCutMarks();
    
    renderer.render(scene, camera);
  }
  
  function updateToolPath() {
    // Remove old path
    if (toolPathLine) {
      scene.remove(toolPathLine);
      toolPathLine.geometry.dispose();
      toolPathLine.material.dispose();
    }
    
    const path = events.toolPath;
    if (path.length < 2) return;
    
    // Create geometry from points
    const points = path.map(p => new THREE.Vector3(p.x, p.y, p.z));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    // Color based on cut type
    const colors = [];
    for (const p of path) {
      if (p.isCut) {
        colors.push(0, 1, 0.5); // Green for cuts
      } else {
        colors.push(0.3, 0.3, 0.4); // Gray for rapid moves
      }
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      linewidth: 2
    });
    
    toolPathLine = new THREE.Line(geometry, material);
    scene.add(toolPathLine);
  }
  
  function updateCutMarks() {
    const path = events.toolPath;
    
    // Create cut marks for cutting movements
    for (let i = cutMarks.children.length; i < path.length; i++) {
      const p = path[i];
      const prev = path[i - 1];
      
      if (p.isCut && prev && p.z <= 0) {
        // Create a groove/cut mark
        if (p.type === 'LinearCut') {
          createLinearCutMark(prev, p);
        } else if (p.type === 'DrillCycle') {
          createDrillHole(p);
        }
      }
    }
  }
  
  function createLinearCutMark(from, to) {
    const cutMaterial = new THREE.MeshBasicMaterial({
      color: 0x2a2a2a,
      transparent: true,
      opacity: 0.8,
    });
    
    // Calculate cut path
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    if (length < 1) return;
    
    const cutGeometry = new THREE.PlaneGeometry(length, 8);
    const cutMark = new THREE.Mesh(cutGeometry, cutMaterial);
    
    // Position and rotate
    cutMark.position.set(
      (from.x + to.x) / 2,
      (from.y + to.y) / 2,
      0.5
    );
    cutMark.rotation.z = Math.atan2(dy, dx);
    
    cutMarks.add(cutMark);
  }
  
  function createDrillHole(point) {
    const holeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
    });
    
    const holeGeometry = new THREE.CircleGeometry(10, 16);
    const hole = new THREE.Mesh(holeGeometry, holeMaterial);
    hole.position.set(point.x, point.y, 0.5);
    
    cutMarks.add(hole);
    drillHoles.push(hole);
  }
  
  // Format position value with unit
  function formatPosition(value, unit = 'mm') {
    const v = value?.toFixed(3) ?? '0.000';
    return `${v}`;
  }
</script>

<div class="cnc-viewer" bind:this={container}>
  <div class="position-display">
    <div class="unit-badge">{machine.unit}</div>
    <div class="axis">
      <span class="label">X</span>
      <span class="value">{formatPosition(machine.position.X)}</span>
    </div>
    <div class="axis">
      <span class="label">Y</span>
      <span class="value">{formatPosition(machine.position.Y)}</span>
    </div>
    <div class="axis">
      <span class="label">Z</span>
      <span class="value">{formatPosition(machine.position.Z)}</span>
    </div>
    {#if machine.spindleOn}
      <div class="spindle-indicator">
        <span class="label">🔄</span>
        <span class="value">{machine.spindle} RPM</span>
      </div>
    {/if}
  </div>
  
  <div class="scale-ruler">
    <div class="ruler-bar"></div>
    <span class="ruler-label">500mm</span>
  </div>
  
  <div class="stats">
    <span>Events: {events.stats.total}</span>
    <span>Rapid: {events.stats.rapidMoves}</span>
    <span>Cuts: {events.stats.linearCuts}</span>
    <span>Arcs: {events.stats.arcs}</span>
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
</style>
