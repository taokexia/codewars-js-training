// Your task in order to complete this Kata is to write a function which formats a duration, given as 
// a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, 
// the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive 
// integer and one of the valid units of time, separated by a space. The unit of time is used in plural 
// if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is 
// separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second 
// and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 
// 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is 
// not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 
// seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must 
// not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
  if(seconds === 0) return 'now'
  if(seconds < 60) return seconds === 1 ? '1 second' : seconds+' seconds'
  if(seconds < 3600) {
    var minutes = Math.floor(seconds / 60)
    var seconds = seconds % 60
    if(seconds === 0) return minutes === 1 ? '1 minute' : minutes + ' minutes'
    else return minutes === 1 ? '1 minute and ' + formatDuration(seconds) : minutes + ' minutes and ' + formatDuration(seconds)
  }
  if(seconds < 86400) {
    var hours = Math.floor(seconds / 3600)
    var minutes = seconds % 3600
    if(minutes === 0) return hours === 1 ? '1 hour' : hours + ' hours'
    else return hours === 1 ? 
        formatDuration(minutes).includes('and') ?
        '1 hour, ' + formatDuration(minutes) :
        '1 hour and ' + formatDuration(minutes)
      : formatDuration(minutes).includes('and') ?
        hours + ' hours, ' + formatDuration(minutes) :
        hours + ' hours and ' + formatDuration(minutes)
  }
  if(seconds < 31536000) {
    var days = Math.floor(seconds / 86400)
    var hours = seconds % 86400
    if(hours === 0) return days === 1 ? '1 day' : days + ' days'
    else return days === 1 ? 
        formatDuration(hours).includes('and') ?
        '1 day, ' + formatDuration(hours) :
        '1 day and' + formatDuration(hours)
      : formatDuration(hours).includes('and') ?
        days + ' days, ' + formatDuration(hours) :
        days + ' days and ' + formatDuration(hours)
  } else {
    var years = Math.floor(seconds / 31536000)
    var days = seconds % 31536000
    if(days === 0) return years === 1 ? '1 year' : years + ' years'
    else return years === 1 ? 
        formatDuration(days).includes('and') ?
        '1 year, ' + formatDuration(days) :
        '1 year and ' + formatDuration(days)
      : formatDuration(days).includes('and') ?
        years + ' years, ' + formatDuration(days) :
        years + ' years and ' + formatDuration(days) 
  }
}

// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];

//   if (seconds === 0) return 'now';
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }

// Sample Test:
const assert = require('assert')
assert.strictEqual(formatDuration(1), "1 second");
assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
assert.strictEqual(formatDuration(120), "2 minutes");
assert.strictEqual(formatDuration(3600), "1 hour");
assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");