const assert = require('assert')
const findSuperMan = require('../')

describe('test my function', () => {
  it("superman is not a SuperMan", ()=> {
    assert.strictEqual(findSuperMan("Hello, I am SuperMan"), "Are you crazy?")
  })
  it("su p e r m a n is not a SuperMan", ()=> {
    assert.strictEqual(findSuperMan("Hello, I am SuxpxexrxMxaxn"), "Are you crazy?")
  })
  it("s u p e r m a n is a SuperMan", ()=> {
    assert.strictEqual(findSuperMan("Hello, I am SxuxpxexrxMxaxn"), "Hi, SuperMan!")
  })  
  it("n a m r e p u s is a SuperMan", ()=> {
    assert.strictEqual(findSuperMan("Hello, I am nxaxmxrxexpxuxs"), "Hi, SuperMan!")
  })
  it("'jfc szzw qudzgh pz geddxyrq mqlvgc ya oddn' is a SuperMan", ()=> {
    assert.strictEqual(findSuperMan("jfc szzw qudzgh pz geddxyrq mqlvgc ya oddn"), "Hi, SuperMan!")
  })
})