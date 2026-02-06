// Estado dos eventos de execução

let eventList = $state([]);
let currentIndex = $state(-1);

// Estatísticas derivadas
const stats = $derived({
  total: eventList.length,
  rapidMoves: eventList.filter(e => e.event?.Type === 'RapidMove').length,
  linearCuts: eventList.filter(e => e.event?.Type === 'LinearCut').length,
  arcs: eventList.filter(e => e.event?.Type === 'ArcCW' || e.event?.Type === 'ArcCCW').length,
});

// Caminho da ferramenta para visualização 3D
const toolPath = $derived(
  eventList.map(e => ({
    x: e.stateAfter?.Position?.X ?? 0,
    y: e.stateAfter?.Position?.Y ?? 0,
    z: e.stateAfter?.Position?.Z ?? 0,
    type: e.event?.Type ?? 'unknown',
    index: e.index,
    isCut: ['LinearCut', 'ArcCW', 'ArcCCW'].includes(e.event?.Type),
  }))
);

export const events = {
  get list() { return eventList; },
  get currentIndex() { return currentIndex; },
  get stats() { return stats; },
  get toolPath() { return toolPath; },
  
  add(event) {
    eventList.push(event);
    currentIndex = event.index;
  },
  
  clear() {
    eventList.length = 0;
    currentIndex = -1;
  },
  
  setCurrentIndex(index) {
    currentIndex = index;
  },
};
