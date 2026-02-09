<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { sessions } from '../state/sessions.svelte.js';
  import { flow } from '../state/flow.svelte.js';
  
  let container;
  let scene, camera, renderer, controls;
  let toolPathCutting = null; // Red path for cutting operations (inside workpiece)
  let toolPathRapid = null;   // Green path for rapid moves (outside workpiece)
  let toolMesh = null;
  let toolBit = null;
  let toolGlow = null;  // Glow effect at tool tip
  let gridHelper = null;
  let workpiece = null;
  let drillHoles = [];
  let animationId = null;
  let toolRotation = 0;
  let lastToolPathLength = 0;
  
  // Scale configuration: 3m view width
  const VIEW_WIDTH = 3000; // 3000mm = 3m
  const DEFAULT_WORKPIECE_SIZE = 2000; // 2m x 2m workpiece (fallback)
  const DEFAULT_WORKPIECE_THICKNESS = 50; // 50mm thick (fallback)
  const PATH_LINE_WIDTH = 3; // Thicker path lines
  
  // Track current stock for recreating workpiece
  let currentStock = null;
  
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
    
    // Workpiece (on XY plane, Z down) - wood colored when stock defined
    createWorkpiece();
    
    // Milling cutter tool (above workpiece, Z positive)
    createMillingTool();
  }
  
  function createWorkpiece(stock = null) {
    // Remove existing workpiece if any
    if (workpiece) {
      scene.remove(workpiece);
      if (workpiece.geometry) workpiece.geometry.dispose();
      if (workpiece.material) workpiece.material.dispose();
      workpiece = null;
    }
    
    // Use stock dimensions or defaults
    const width = stock?.width ?? DEFAULT_WORKPIECE_SIZE;
    const height = stock?.height ?? DEFAULT_WORKPIECE_SIZE;
    const depth = stock?.depth ?? DEFAULT_WORKPIECE_THICKNESS;
    
    // Stock position - Position.Z is the BOTTOM of the stock (minimum Z)
    // TopZ = Position.Z + Depth
    const posX = stock?.position?.X ?? 0;
    const posY = stock?.position?.Y ?? 0;
    const bottomZ = stock?.position?.Z ?? -depth;
    
    // Store current stock for comparison
    currentStock = stock;
    
    // Workpiece material - wood-like color when stock is defined, dark otherwise
    const hasStock = !!stock;
    const workpieceMaterial = new THREE.MeshStandardMaterial({
      color: hasStock ? 0xDEB887 : 0x1a1a1a, // BurlyWood or dark black
      roughness: hasStock ? 0.8 : 0.6,
      metalness: hasStock ? 0.1 : 0.2,
      transparent: hasStock,
      opacity: hasStock ? 0.85 : 1.0,
    });
    
    // Create workpiece geometry - lies on XY plane, extends down in Z
    const workpieceGeometry = new THREE.BoxGeometry(width, height, depth);
    workpiece = new THREE.Mesh(workpieceGeometry, workpieceMaterial);
    
    // Position: center of box at midpoint
    // Box center is at (posX + width/2, posY + height/2, bottomZ + depth/2)
    workpiece.position.set(
      posX + width / 2,
      posY + height / 2, 
      bottomZ + depth / 2  // Center Z = bottomZ + depth/2
    );
    workpiece.receiveShadow = true;
    scene.add(workpiece);
    
    // Add wireframe outline when stock is defined for better visibility
    if (hasStock) {
      const wireframeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x8B4513, // SaddleBrown 
        linewidth: 2 
      });
      const wireframeGeometry = new THREE.EdgesGeometry(workpieceGeometry);
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      wireframe.position.copy(workpiece.position);
      workpiece.userData.wireframe = wireframe;
      scene.add(wireframe);
    }
  }
  
  function createMillingTool() {
    // Get current tool configuration from session
    const currentToolConfig = sessions.currentTool;
    const diameter = currentToolConfig?.Diameter ?? 6.0;
    const fluteLength = currentToolConfig?.FluteLength ?? 25.0;
    const toolType = currentToolConfig?.Type ?? 'EndMill';
    
    console.log('[Tool] Creating milling tool:', { diameter, fluteLength, toolType });
    
    // Tool holder group
    const holderGroup = new THREE.Group();
    
    // Motor housing (square box)
    const motorSize = 40;
    const motorHeight = 60;
    const motorGeometry = new THREE.BoxGeometry(motorSize, motorSize, motorHeight);
    const motorMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.7,
      roughness: 0.4,
    });
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.z = 70;
    holderGroup.add(motor);
    
    // Motor mounting plate
    const plateGeometry = new THREE.BoxGeometry(motorSize + 10, motorSize + 10, 5);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      metalness: 0.6,
      roughness: 0.5,
    });
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.position.z = 38;
    holderGroup.add(plate);
    
    // Collet/shaft housing (adapts to tool shank diameter)
    const colletOuterRadius = Math.max(10, diameter / 2 + 4);
    const colletInnerRadius = Math.max(8, diameter / 2 + 2);
    const colletGeometry = new THREE.CylinderGeometry(colletInnerRadius, colletOuterRadius, 15, 16);
    const colletMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.9,
      roughness: 0.2,
    });
    const collet = new THREE.Mesh(colletGeometry, colletMaterial);
    collet.rotation.x = Math.PI / 2; // Align with Z axis
    collet.position.z = 28;
    holderGroup.add(collet);
    
    // Milling bit group (the rotating part)
    // Built so that the cutting tool TIP is at Z=0 in bitGroup coordinates
    const bitGroup = new THREE.Group();
    
    // Shank (connection between collet and cutter) - matches tool diameter
    const shankRadius = diameter / 2;
    const shankLength = 20;
    const shankGeometry = new THREE.CylinderGeometry(shankRadius, shankRadius, shankLength, 16);
    const shankMaterial = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.9,
      roughness: 0.1,
    });
    const shank = new THREE.Mesh(shankGeometry, shankMaterial);
    shank.rotation.x = Math.PI / 2; // Align with Z axis
    shank.position.z = fluteLength + shankLength / 2; // Above the cutting tool
    bitGroup.add(shank);
    
    // Cutting tool (flutes) - realistic end mill or ball nose
    // This will place its TIP at bitGroup's Z=0
    createCuttingTool(bitGroup, diameter, fluteLength, toolType);
    
    // Glow effect at the tool tip (tip is at Z=0 in local coordinates)
    const glowRadius = diameter * 1.5;
    const glowGeometry = new THREE.SphereGeometry(glowRadius, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
    });
    toolGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    toolGlow.position.z = 0; // At the tip (local Z=0)
    bitGroup.add(toolGlow);
    
    toolBit = bitGroup;
    holderGroup.add(bitGroup);
    
    toolMesh = holderGroup;
    toolMesh.castShadow = true;
    scene.add(toolMesh);
  }
  
  function createCuttingTool(parent, diameter, fluteLength, toolType) {
    const radius = diameter / 2;
    const numFlutes = 4; // 4-flute end mill is standard
    const fluteDepth = radius * 0.15; // Flute depth is ~15% of radius
    
    // All cutting tools are built so that the TIP is at Z=0 in local coordinates
    // This makes alignment with G-code positions trivial
    
    if (toolType === 'EndMill') {
      // Create end mill with visible flutes
      const cutterGroup = new THREE.Group();
      
      // Main cutter body (extends from tip at Z=0 to Z=fluteLength)
      const bodyGeometry = new THREE.CylinderGeometry(radius, radius, fluteLength, 32);
      const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xDDDDDD,
        metalness: 0.9,
        roughness: 0.15,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      body.position.z = fluteLength / 2; // Center of cylinder at midpoint
      cutterGroup.add(body);
      
      // Create flutes (helical grooves)
      for (let i = 0; i < numFlutes; i++) {
        const fluteAngle = (Math.PI * 2 * i) / numFlutes;
        const fluteGeometry = createFluteGeometry(radius, fluteLength, fluteDepth, fluteAngle);
        const fluteMaterial = new THREE.MeshStandardMaterial({
          color: 0x999999,
          metalness: 0.8,
          roughness: 0.3,
        });
        const flute = new THREE.Mesh(fluteGeometry, fluteMaterial);
        flute.rotation.x = Math.PI / 2;
        flute.position.z = fluteLength / 2; // Align with body
        cutterGroup.add(flute);
      }
      
      // Flat bottom tip at Z=0 (end mill characteristic)
      const tipGeometry = new THREE.CircleGeometry(radius, 32);
      const tipMaterial = new THREE.MeshStandardMaterial({
        color: 0xBBBBBB,
        metalness: 0.85,
        roughness: 0.2,
      });
      const tip = new THREE.Mesh(tipGeometry, tipMaterial);
      tip.rotation.x = -Math.PI / 2;
      tip.position.z = 0; // Tip exactly at Z=0
      cutterGroup.add(tip);
      
      // Position cutter group so tip is at parent's Z=0
      cutterGroup.position.z = 0;
      parent.add(cutterGroup);
      
    } else if (toolType === 'BallNose') {
      // Create ball nose end mill
      const cutterGroup = new THREE.Group();
      
      // Main cutter body (extends from Z=0 to Z=fluteLength)
      const bodyGeometry = new THREE.CylinderGeometry(radius, radius, fluteLength - radius, 32);
      const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xDDDDDD,
        metalness: 0.9,
        roughness: 0.15,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      body.position.z = radius + (fluteLength - radius) / 2; // Starts at Z=radius
      cutterGroup.add(body);
      
      // Ball nose tip (hemisphere at Z=0)
      const tipGeometry = new THREE.SphereGeometry(radius, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const tipMaterial = new THREE.MeshStandardMaterial({
        color: 0xBBBBBB,
        metalness: 0.85,
        roughness: 0.2,
      });
      const tip = new THREE.Mesh(tipGeometry, tipMaterial);
      tip.rotation.x = Math.PI;
      tip.position.z = 0; // Tip at Z=0
      cutterGroup.add(tip);
      
      // Position cutter group so tip is at parent's Z=0
      cutterGroup.position.z = 0;
      parent.add(cutterGroup);
    }
  }
  
  function createFluteGeometry(radius, length, depth, startAngle) {
    // Create a simple flute groove as a thin box
    const fluteWidth = radius * 0.3;
    const fluteGeometry = new THREE.BoxGeometry(fluteWidth, depth, length);
    
    // Position it at the edge of the cutter
    const geometry = fluteGeometry.clone();
    geometry.translate((radius - depth / 2), 0, 0);
    geometry.rotateZ(startAngle);
    
    return geometry;
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
      // Position tool tip exactly at the G-code position
      // The tool is built with the tip at a specific offset below the holder
      toolMesh.position.set(
        machine.position.X ?? 0,
        machine.position.Y ?? 0,
        machine.position.Z ?? 0 // Tip exactly at Z coordinate
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
    
    // Update tool path visualization
    updateToolPath();
    
    renderer.render(scene, camera);
  }
  
  function updateToolPath() {
    // Get tool path from active session
    const path = sessions.toolPath;
    const currentIndex = sessions.currentIndex;
    const stock = sessions.stock;
    
    // Remove old paths if session changed or path significantly changed
    if ((toolPathCutting || toolPathRapid) && (path.length < lastToolPathLength || path.length === 0)) {
      if (toolPathCutting) {
        scene.remove(toolPathCutting);
        toolPathCutting.geometry.dispose();
        toolPathCutting.material.dispose();
        toolPathCutting = null;
      }
      if (toolPathRapid) {
        scene.remove(toolPathRapid);
        toolPathRapid.geometry.dispose();
        toolPathRapid.material.dispose();
        toolPathRapid = null;
      }
      lastToolPathLength = 0;
    }
    
    if (path.length < 2) {
      lastToolPathLength = path.length;
      return;
    }
    
    // Only update if path changed
    if (path.length === lastToolPathLength) {
      return;
    }
    
    // Remove old paths
    if (toolPathCutting) {
      scene.remove(toolPathCutting);
      toolPathCutting.geometry.dispose();
      toolPathCutting.material.dispose();
      toolPathCutting = null;
    }
    if (toolPathRapid) {
      scene.remove(toolPathRapid);
      toolPathRapid.geometry.dispose();
      toolPathRapid.material.dispose();
      toolPathRapid = null;
    }
    
    // Helper function to check if a point is inside workpiece
    const isInsideWorkpiece = (point) => {
      if (!stock) return false;
      
      const minX = stock.position?.X ?? 0;
      const minY = stock.position?.Y ?? 0;
      const bottomZ = stock.position?.Z ?? -stock.depth;
      const topZ = bottomZ + stock.depth;
      
      const maxX = minX + stock.width;
      const maxY = minY + stock.height;
      
      return point.x >= minX && point.x <= maxX &&
             point.y >= minY && point.y <= maxY &&
             point.z >= bottomZ && point.z <= topZ;
    };
    
    // Separate points for cutting (inside workpiece) and rapid (outside workpiece) paths
    const cuttingSegments = [];
    const rapidSegments = [];
    
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
      
      // Check if segment is inside workpiece (both points inside)
      const prevInside = isInsideWorkpiece({ x: prev.x, y: prev.y, z: prev.z });
      const currInside = isInsideWorkpiece({ x: curr.x, y: curr.y, z: curr.z });
      
      if (prevInside || currInside) {
        // At least one point inside = cutting path (RED)
        cuttingSegments.push(segment);
      } else {
        // Both points outside = rapid path (GREEN)
        rapidSegments.push(segment);
      }
    }
    
    // Create cutting path (RED) - path inside workpiece
    if (cuttingSegments.length > 0) {
      const cuttingPoints = [];
      const cuttingColors = [];
      for (const seg of cuttingSegments) {
        cuttingPoints.push(...seg.points);
        const redIntensity = 0.9 * (seg.isPast ? 1.0 : 0.3);
        // Red color for both start and end points
        cuttingColors.push(redIntensity, 0, 0);
        cuttingColors.push(redIntensity, 0, 0);
      }
      
      const cuttingGeometry = new THREE.BufferGeometry().setFromPoints(cuttingPoints);
      cuttingGeometry.setAttribute('color', new THREE.Float32BufferAttribute(cuttingColors, 3));
      
      const cuttingMaterial = new THREE.LineBasicMaterial({ 
        vertexColors: true,
        linewidth: PATH_LINE_WIDTH
      });
      
      toolPathCutting = new THREE.LineSegments(cuttingGeometry, cuttingMaterial);
      scene.add(toolPathCutting);
    }
    
    // Create rapid path (GREEN) - path outside workpiece
    if (rapidSegments.length > 0) {
      const rapidPoints = [];
      const rapidColors = [];
      for (const seg of rapidSegments) {
        rapidPoints.push(...seg.points);
        const greenIntensity = 0.9 * (seg.isPast ? 1.0 : 0.3);
        // Green color for both start and end points
        rapidColors.push(0, greenIntensity, 0);
        rapidColors.push(0, greenIntensity, 0);
      }
      
      const rapidGeometry = new THREE.BufferGeometry().setFromPoints(rapidPoints);
      rapidGeometry.setAttribute('color', new THREE.Float32BufferAttribute(rapidColors, 3));
      
      const rapidMaterial = new THREE.LineBasicMaterial({ 
        vertexColors: true,
        linewidth: PATH_LINE_WIDTH
      });
      
      toolPathRapid = new THREE.LineSegments(rapidGeometry, rapidMaterial);
      scene.add(toolPathRapid);
    }
    
    lastToolPathLength = path.length;
  }
  
  // Format position value with unit
  function formatPosition(value, unit = 'mm') {
    const v = value?.toFixed(3) ?? '0.000';
    return `${v}`;
  }
  
  // Helper to compare stock objects
  function stockChanged(a, b) {
    if (!a && !b) return false;
    if (!a || !b) return true;
    return a.width !== b.width || 
           a.height !== b.height || 
           a.depth !== b.depth ||
           a.position?.X !== b.position?.X ||
           a.position?.Y !== b.position?.Y ||
           a.position?.Z !== b.position?.Z;
  }
  
  // Reactive getters
  $effect(() => {
    // This effect runs whenever active session changes
    // Recreate workpiece when session changes
    const activeId = sessions.activeId;
    const stock = sessions.stock;
    
    if (activeId && scene) {
      // Clear processing state
      drillHoles = [];
      lastToolPathLength = 0;
      
      // Recreate workpiece with stock from session
      if (stockChanged(currentStock, stock)) {
        // Remove wireframe if exists
        if (workpiece?.userData?.wireframe) {
          scene.remove(workpiece.userData.wireframe);
          workpiece.userData.wireframe.geometry.dispose();
          workpiece.userData.wireframe.material.dispose();
        }
        createWorkpiece(stock);
      }
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
      <span class="legend-color cutting"></span>
      <span class="legend-text">Inside workpiece</span>
    </div>
    <div class="legend-item">
      <span class="legend-color rapid"></span>
      <span class="legend-text">Outside workpiece</span>
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
  
  .legend-color.cutting {
    background: #cc0000; /* Red for inside workpiece */
  }
  
  .legend-color.rapid {
    background: #00cc00; /* Green for outside workpiece */
  }
  
  .legend-text {
    font-size: 10px;
    color: var(--text-secondary);
  }
</style>
