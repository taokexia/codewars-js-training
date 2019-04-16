// Write a function, which takes a non-negative integer (seconds) as input and returns the 
// time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  var date = new Date(seconds*1000)
  var hour = String(Math.floor(seconds/3600)).length < 2 ? '0' + Math.floor(seconds/3600) : Math.floor(seconds/3600)
  var minutes = String(date.getMinutes()).length < 2 ? '0'+ date.getMinutes() : date.getMinutes()
  var seconds = String(date.getSeconds()).length < 2 ? '0'+ date.getSeconds() : date.getSeconds()
  return hour+':'+minutes+':'+seconds
}

// function humanReadable(seconds) {
//   return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//     v = Math.floor(v).toString();
//     return v.length == 1 ? '0' + v : v;
//   }).join(':');
// }

// Sample Test:
const assert = require('assert')
describe('examples', function() {
  it('should format correctly', function() {
    assert.strictEqual(humanReadable(0), '00:00:00');
    assert.strictEqual(humanReadable(5), '00:00:05');
    assert.strictEqual(humanReadable(60), '00:01:00');
    assert.strictEqual(humanReadable(86399), '23:59:59');
    assert.strictEqual(humanReadable(359999), '99:59:59');
  });
});