const assert = require('assert')
const numberToPrice = require('../')

// Sample Tests:
describe("Example tests", ()=>{
  it('numberToPrice(1500.129) should return 1,500.12', () => {
    assert.strictEqual(numberToPrice(1500.129),   '1,500.12');
  })
  it('numberToPrice(-5) should return -5.00', () => {
    assert.strictEqual(numberToPrice(-5),   '-5.00');
  })
  it('numberToPrice(1000000.5) should return 1,000,000.50', () => {
    assert.strictEqual(numberToPrice(1000000.5),   '1,000,000.50');
  })
  it("numberToPrice('@') should return NaN", () => {
    assert.strictEqual(numberToPrice('@'),   'NaN');
  })
});