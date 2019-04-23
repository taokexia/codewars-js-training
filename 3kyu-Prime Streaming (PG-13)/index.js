// Create an endless stream of prime numbers - a bit like IntStream.of(2,3,5,7,11,13,17), but infinite. 
// The stream must be able to produce a million primes in a few seconds.

// If this is too easy, try Prime Streaming (NC-17).

// Note: In Ruby, the require keyword is disabled.

// Execution Timed Out (12000 ms)
// class Primes {
//   static * stream() {
//     var i = 2
//     yield i++
//     while(true) {
//       if(isPrime(i)) yield i++
//       else i++
//     }
//     function isPrime(num) {
//       for(var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//         if( num % i === 0) return false
//       }
//       return true
//     }
//   }
// }

// black magic 
class Primes {
  static * stream() {
    var i = 1
    while(true) {
      yield queue[i]
      i++
    }
  }
}
var queue = []
function find_prime(n) {
  var isprime = []
  var phi = []
  var sp = 0
  for(var i = 2;i <= n;i++) {
    if(!isprime[i]) {
      queue[++sp] = i
      isprime[i] = i
      phi[i] = i-1
    }
    for(var j = 1;j <= sp && i * queue[j] <= n;j++) {
            isprime[i*queue[j]] = queue[j];
            if(queue[j] >= isprime[i]) {
                phi[i*queue[j]] = phi[i]*queue[j];
                break;
            }
            phi[i*queue[j]] = phi[i]*(queue[j]-1);
        }
    }
}
find_prime(20000000)

