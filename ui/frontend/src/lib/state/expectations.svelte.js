// Estado das expectations

let expectationList = $state([]);
let testInfo = $state({
  name: null,
  running: false,
  allPassed: null,
});

// Estatísticas derivadas
const stats = $derived({
  total: expectationList.length,
  passed: expectationList.filter(e => e.passed).length,
  failed: expectationList.filter(e => !e.passed).length,
  get allPassed() {
    return this.failed === 0 && this.total > 0;
  },
});

export const expectations = {
  get list() { return expectationList; },
  get stats() { return stats; },
  get test() { return testInfo; },
  
  add(expectation) {
    expectationList.push(expectation);
  },
  
  clear() {
    expectationList.length = 0;
  },
  
  setTest(name, running = true) {
    testInfo.name = name;
    testInfo.running = running;
    testInfo.allPassed = null;
  },
  
  endTest(allPassed) {
    testInfo.running = false;
    testInfo.allPassed = allPassed;
  },
};
