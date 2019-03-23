const addOne = require('../').addOne
const square = require('../').square
const assert = require('assert')

describe("Example tests", ()=>{
  it('addOne.pipe(square)(1) should return 4', () => {
    assert.strictEqual(addOne.pipe(square)(1), 4);
  })
  it('addOne.pipe(square)(2) should return 9', () => {
    assert.strictEqual(addOne.pipe(square)(2), 9);
  })
});