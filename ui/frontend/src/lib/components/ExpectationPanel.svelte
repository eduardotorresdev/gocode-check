<script>
  import { sessions } from '../state/sessions.svelte.js';
  
  // Computed stats from session expectations
  function getStats() {
    const list = sessions.expectations;
    return {
      passed: list.filter(e => e.passed).length,
      failed: list.filter(e => !e.passed).length,
    };
  }

  // Parse the technical description into human-friendly format
  function parseDescription(desc) {
    if (!desc) return { icon: '❓', title: 'Unknown', details: [] };

    // HasHole(x, y) with optional chained filters
    const holeMatch = desc.match(/HasHole\(([-\d.]+),\s*([-\d.]+)\)(.*)/);
    if (holeMatch) {
      const x = parseFloat(holeMatch[1]).toFixed(1);
      const y = parseFloat(holeMatch[2]).toFixed(1);
      const chain = holeMatch[3] || '';
      
      const details = [];
      details.push(`Position: (${x}, ${y})`);
      
      const depthMatch = chain.match(/\.WithDepth\(([-\d.]+)\)/);
      if (depthMatch) {
        details.push(`Depth: ${parseFloat(depthMatch[1]).toFixed(1)}mm`);
      }
      
      const diameterMatch = chain.match(/\.WithDiameter\(([-\d.]+)\)/);
      if (diameterMatch) {
        details.push(`Diameter: ${parseFloat(diameterMatch[1]).toFixed(1)}mm`);
      }
      
      const toolMatch = chain.match(/\.WithTool\((\d+)\)/);
      if (toolMatch) {
        details.push(`Tool: T${toolMatch[1]}`);
      }
      
      return { icon: '🕳️', title: 'Hole', details };
    }

    // HasHoleCount(n)
    const holeCountMatch = desc.match(/HasHoleCount\((\d+)\)/);
    if (holeCountMatch) {
      return { 
        icon: '🔢', 
        title: 'Hole Count', 
        details: [`Expected: ${holeCountMatch[1]} holes`] 
      };
    }

    // HasSlot((x1, y1) -> (x2, y2)) with optional filters
    const slotMatch = desc.match(/HasSlot\(\(([-\d.]+),\s*([-\d.]+)\)\s*->\s*\(([-\d.]+),\s*([-\d.]+)\)\)(.*)/);
    if (slotMatch) {
      const x1 = parseFloat(slotMatch[1]).toFixed(1);
      const y1 = parseFloat(slotMatch[2]).toFixed(1);
      const x2 = parseFloat(slotMatch[3]).toFixed(1);
      const y2 = parseFloat(slotMatch[4]).toFixed(1);
      const chain = slotMatch[5] || '';
      
      const details = [];
      details.push(`From: (${x1}, ${y1})`);
      details.push(`To: (${x2}, ${y2})`);
      
      const widthMatch = chain.match(/\.WithWidth\(([-\d.]+)\)/);
      if (widthMatch) {
        details.push(`Width: ${parseFloat(widthMatch[1]).toFixed(1)}mm`);
      }
      
      const depthMatch = chain.match(/\.WithSlotDepth\(([-\d.]+)\)/);
      if (depthMatch) {
        details.push(`Depth: ${parseFloat(depthMatch[1]).toFixed(1)}mm`);
      }
      
      return { icon: '📏', title: 'Slot', details };
    }

    // HasSlotCount(n)
    const slotCountMatch = desc.match(/HasSlotCount\((\d+)\)/);
    if (slotCountMatch) {
      return { 
        icon: '🔢', 
        title: 'Slot Count', 
        details: [`Expected: ${slotCountMatch[1]} slots`] 
      };
    }

    // HasContour() with optional filters
    const contourMatch = desc.match(/HasContour\(\)(.*)/);
    if (contourMatch) {
      const chain = contourMatch[1] || '';
      const details = [];
      
      if (chain.includes('.IsClosed()')) {
        details.push('Type: Closed loop');
      } else if (chain.includes('.IsOpen()')) {
        details.push('Type: Open path');
      }
      
      const segmentMatch = chain.match(/\.HasSegmentCount\((\d+)\)/);
      if (segmentMatch) {
        details.push(`Segments: ${segmentMatch[1]}`);
      }
      
      return { icon: '🔲', title: 'Contour', details };
    }

    // HasContourCount(n)
    const contourCountMatch = desc.match(/HasContourCount\((\d+)\)/);
    if (contourCountMatch) {
      return { 
        icon: '🔢', 
        title: 'Contour Count', 
        details: [`Expected: ${contourCountMatch[1]} contours`] 
      };
    }

    // NoOperationOutside bounds
    const boundsMatch = desc.match(/NoOperationOutside/);
    if (boundsMatch) {
      return { 
        icon: '📐', 
        title: 'Boundary Check', 
        details: ['All operations within bounds'] 
      };
    }

    // Fallback - just show the raw description
    return { icon: '✓', title: 'Assertion', details: [desc] };
  }

  // Format expectation with human-readable info
  function formatExpectation(exp) {
    const parsed = parseDescription(exp.description);
    
    if (!exp.passed && exp.errorMessage) {
      return {
        ...parsed,
        error: exp.errorMessage
      };
    }
    
    return parsed;
  }
</script>

<div class="expectation-panel">
  <div class="panel-header">
    <h3>Expectations</h3>
    <div class="stats">
      <span class="passed">{getStats().passed} ✓</span>
      <span class="failed">{getStats().failed} ✗</span>
    </div>
  </div>
  
  <div class="expectation-list">
    {#each sessions.expectations as exp, i}
      {@const formatted = formatExpectation(exp)}
      <div class="expectation-item" class:passed={exp.passed} class:failed={!exp.passed}>
        <div class="expectation-header">
          <span class="type-icon">{formatted.icon}</span>
          <span class="type-title">{formatted.title}</span>
          <span class="status-icon">{exp.passed ? '✓' : '✗'}</span>
        </div>
        <div class="content">
          {#each formatted.details as detail}
            <div class="detail">{detail}</div>
          {/each}
          {#if formatted.error}
            <div class="error-message">{formatted.error}</div>
          {/if}
        </div>
      </div>
    {:else}
      <div class="empty">
        {#if sessions.count === 0}
          Waiting for test session...
        {:else}
          No expectations yet
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .expectation-panel {
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border-left: 1px solid var(--border-color);
    height: 100%;
    overflow: hidden;
  }
  
  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
  }
  
  .panel-header h3 {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
  }
  
  .stats {
    display: flex;
    gap: var(--spacing-md);
    font-size: 12px;
    font-family: var(--font-mono);
  }
  
  .stats .passed {
    color: var(--accent-green);
  }
  
  .stats .failed {
    color: var(--accent-red);
  }
  
  .expectation-list {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-sm);
  }
  
  .expectation-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-sm);
    background: var(--bg-tertiary);
    border: 2px solid transparent;
  }
  
  .expectation-item.passed {
    border-color: var(--accent-green);
    background: rgba(0, 255, 136, 0.05);
  }
  
  .expectation-item.failed {
    border-color: var(--accent-red);
    background: rgba(255, 50, 50, 0.05);
  }
  
  .expectation-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .type-icon {
    font-size: 18px;
    width: 24px;
    text-align: center;
  }
  
  .type-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    flex: 1;
  }

  .status-icon {
    font-size: 14px;
    font-weight: bold;
    width: 20px;
    text-align: center;
  }
  
  .expectation-item.passed .status-icon {
    color: var(--accent-green);
  }
  
  .expectation-item.failed .status-icon {
    color: var(--accent-red);
  }
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 32px;
  }
  
  .detail {
    font-size: 11px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }
  
  .error-message {
    font-size: 11px;
    color: var(--accent-red);
    font-family: var(--font-mono);
    background: rgba(255, 50, 50, 0.1);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    margin-top: var(--spacing-xs);
    line-height: 1.4;
    white-space: pre-wrap;
  }
  
  .empty {
    text-align: center;
    padding: var(--spacing-lg);
    color: var(--text-muted);
    font-size: 12px;
  }
</style>
