<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { events } from '../state/events.svelte.js';
  import { machine } from '../state/machine.svelte.js';
  
  let container;
  let scene, camera, renderer;
  let toolPathLine = null;
  let toolMesh = null;
  let gridHelper = null;
  let animationId = null;
  
  onMount(() => {
    initScene();
    animate();
  });
  
  onDestroy(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
  });
  
  function initScene() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    // Camera
    camera = new THREE.PerspectiveCamera(
      60, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Grid
    gridHelper = new THREE.GridHelper(200, 20, 0x3a3a4a, 0x2a2a3a);
    gridHelper.rotation.x = Math.PI / 2;
    scene.add(gridHelper);
    
    // Axes helper
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
    
    // Tool (spindle representation)
    const toolGeometry = new THREE.ConeGeometry(3, 10, 8);
    const toolMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff88,
      wireframe: true 
    });
    toolMesh = new THREE.Mesh(toolGeometry, toolMaterial);
    toolMesh.rotation.x = Math.PI;
    scene.add(toolMesh);
    
    // Handle resize
    window.addEventListener('resize', onResize);
  }
  
  function onResize() {
    if (!container || !camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Update tool position
    if (toolMesh && machine.position) {
      toolMesh.position.set(
        machine.position.X ?? 0,
        machine.position.Y ?? 0,
        (machine.position.Z ?? 0) + 5
      );
    }
    
    // Update tool path
    updateToolPath();
    
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
</script>

<div class="cnc-viewer" bind:this={container}>
  <div class="position-display">
    <div class="axis">
      <span class="label">X</span>
      <span class="value">{machine.position.X?.toFixed(3) ?? '0.000'}</span>
    </div>
    <div class="axis">
      <span class="label">Y</span>
      <span class="value">{machine.position.Y?.toFixed(3) ?? '0.000'}</span>
    </div>
    <div class="axis">
      <span class="label">Z</span>
      <span class="value">{machine.position.Z?.toFixed(3) ?? '0.000'}</span>
    </div>
  </div>
  
  <div class="stats">
    <span>Events: {events.stats.total}</span>
    <span>Rapid: {events.stats.rapidMoves}</span>
    <span>Cuts: {events.stats.linearCuts}</span>
    <span>Arcs: {events.stats.arcs}</span>
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
</style>
