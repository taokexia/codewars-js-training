// Create a function that transforms any positive number to a string representing the number in words. 
// The function should work for all numbers between 0 and 999999.

// Examples
// number2words(0)  ==>  "zero"
// number2words(1)  ==>  "one"
// number2words(9)  ==>  "nine"
// number2words(10)  ==>  "ten"
// number2words(17)  ==>  "seventeen"
// number2words(20)  ==>  "twenty"
// number2words(21)  ==>  "twenty-one"
// number2words(45)  ==>  "forty-five"
// number2words(80)  ==>  "eighty"
// number2words(99)  ==>  "ninety-nine"
// number2words(100)  ==>  "one hundred"
// number2words(301)  ==>  "three hundred one"
// number2words(799)  ==>  "seven hundred ninety-nine"
// number2words(800)  ==>  "eight hundred"
// number2words(950)  ==>  "nine hundred fifty"
// number2words(1000)  ==>  "one thousand"
// number2words(1002)  ==>  "one thousand two"
// number2words(3051)  ==>  "three thousand fifty-one"
// number2words(7200)  ==>  "seven thousand two hundred"
// number2words(7219)  ==>  "seven thousand two hundred nineteen"
// number2words(8330)  ==>  "eight thousand three hundred thirty"
// number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
// number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"

function number2words(n){
  // works for numbers between 0 and 999999
  var res = ''
  var j = 1
  var s = n.toString().split('')
  // change one number
  if(s.length === 1) return map[n]
  // change two number
  if(s.length === 2) {
    if(s[0] === '1' || s[1] === '0') return map[n]
    return map[Number(s[0])*10] + '-' + map[s[1]]
  }
  // change three number
  if(s.length === 3) {
    if(s[1] === '0' && s[2] === '0') return map[Number(s[0])] + ' ' + map[100]
    return map[Number(s[0])] + ' ' + map[100] + ' ' + number2words(n % 100)
  }
  if(s.length === 4) {
    if(s[1] === '0' && s[2] === '0' && s[3] === '0') return map[Number(s[0])] + ' ' + map[1000]
    return map[Number(s[0])] + ' ' + map[1000]  + ' ' + number2words(n % 1000)
  }
  if(s.length >= 5) {
    return number2words(Math.floor(n / 1000)) + ' thousand ' + number2words(n % 1000)
  }
}

var map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  }

  // better solution
  // var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  // var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  
  // function number2words(n){
  //   if (n < 20) return num[n];
  //   var digit = n%10;
  //   if (n < 100) return tens[Math.floor(n/10)-2] + (digit ? "-"+num[digit] : "");
  //   if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 == 0 ? "" : " " + number2words(n%100));
  //   return number2words(Math.floor(n/1000)) + " thousand" + (n%1000 != 0 ? " " +number2words(n%1000) : "");
  // }