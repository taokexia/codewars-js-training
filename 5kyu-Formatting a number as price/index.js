// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, 
// cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's 
// so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function(number) {
  if(!Number(number)) return 'NaN'
  var a = number.toString().split('.')
  a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  a[1] = a[1] == null ? '00' : a[1].length === 1 ? a[1] + '0' : a[1].substring(0, 2) 
  return a[0] + '.' + a[1]
}


// var numberToPrice = function(n) {
//   return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
// }

module.exports = numberToPrice