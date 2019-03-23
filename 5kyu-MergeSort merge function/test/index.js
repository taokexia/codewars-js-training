const assert = require('assert')
const mergesorted = require('../')

describe('test my mergesort', () => {
  it('mergesorted([1,2],[3,4]) should return [1,2,3,4]', ()=> {
    assert.deepEqual(mergesorted([1,2],[3,4]), [1,2,3,4])
  })
  it('mergesorted([1,2],[3]) should return [1,2,3]', ()=> {
    assert.deepEqual(mergesorted([1,2],[3]), [1,2,3])
  })
  it('mergesorted([1],[2, 3]) should return [1,2,3]', ()=> {
    assert.deepEqual(mergesorted([1],[2, 3]), [1,2,3])
  })
})