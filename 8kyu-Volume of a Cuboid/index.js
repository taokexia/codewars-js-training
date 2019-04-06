// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and 
// the height of the cuboid. Write a function to help Bob with this calculation.

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height
  };

  return Kata;

})();

// Sample Tests:
const assert = require('assert')
describe('Test function', ()=> {
  it('Kata.getVolumeOfCuboid(1,2,2) should return 4', () => {
    assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2), 4)
  })
  it('Kata.getVolumeOfCuboid(6.3,2,5) should return 63', () => {
    assert.strictEqual(Kata.getVolumeOfCuboid(6.3,2,5), 63)
  })
})