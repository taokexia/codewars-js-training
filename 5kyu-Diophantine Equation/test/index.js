const assert = require('assert')
const solequa = require('../')

describe('Test my solution', () => {
  it('solequa(5) should return [[3, 1]]', () => {
    assert.deepEqual(solequa(5), [[3, 1]])
  })
  it('solequa(12) should return [[4, 1]]', () => {
    assert.deepEqual(solequa(12), [[4, 1]])
  })
  it('solequa(13) should return [[7, 3]]', () => {
    assert.deepEqual(solequa(13), [[7, 3]])
  })
  it('solequa(16) should return [[4, 0]]', () => {
    assert.deepEqual(solequa(16), [[4, 0]])
  })
  it('solequa(90005) should return [[45003, 22501], [9003, 4499], [981, 467], [309, 37]]', () => {
    assert.deepEqual(solequa(90005), [[45003, 22501], [9003, 4499], [981, 467], [309, 37]])
  })
})