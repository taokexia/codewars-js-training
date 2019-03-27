// Crazy programmer : Must praise

// Hey, young man, very glad to see you again in this madhouse, thanks to your help, 
// I have you as my best partner.

// Now, let us begin a battle together!

// My colleague myjinxin decided to run for president, as a great programmer, 
// he has the qualifications and ability!

// Some people interfere with his campaign, take some disgraceful action, someone with 
// malicious libel him on the network, so we must take strong action to counter attack!

// We want to write code to correct these vicious words, and help myjinxin to establish 
// a good public image. The enemy is more malicious attacks, we should be more strong counterattack.

// Our battle plan:

// 1. Replace all the bad words, such as ugly, evil, shameless, obscene,
// obese, greedy, replace it to the good adjective, we can use the word
// 'handsome' replace them. In addition, if the `hate him` appears in the
// sentence, we must replace `hate` to `praise`.
// 2. The sentence must be of sufficient length (50 characters, including
// spaces and punctuation), making it easier for people to see these changes.
//    The first case: 
//    If the sentence contains bad adjectives has been
//    replaced for "handsome", and the sentence length less than 50
//    characters, plus `very ` in front of `handsome`. Still not enough 50
//    characters? please plus more and more... Until length reached 50.
//    The second case:
//    If there is no bad words are replaced by handsome, the sentence length
//    is less than 50, we must add the words of praise in the sentence:
//    ` The handsome myjinxin, we praise him!!!!`
// 3. If the enemy is using all capitalized bad words to attack myjinxin, 
// so we have to use the same way to fight back, all replaced words `very`,
// `handsome`, `praise` also be all capitalized too!
// We are great programmers, we are not afraid of any war, the keyboard is your weapon, 
// starting the fight, young man!

// Solution:
function mustpraise(s){
  //Praise makes people more handsome
  var changeCount = 0
  var toUpper = false
  var pos
  var c = s.replace(/\b(?:evil|greedy|ugly|shameless|obscene|obese)/ig, function(match,index) {
    changeCount++
    pos = index
    if(match.charCodeAt(0) < 97) {
      toUpper = true
      return 'HANDSOME'
    } else {
      return 'handsome'
    }
  }).replace(/\bhate/ig, function(match) {
    if(match.charCodeAt(0) < 97 || toUpper) {
      return 'PRAISE'
    } else {
      return 'praise'
    }
  })
  if(c.length < 50 && changeCount === 0) {
    c += ' The handsome myjinxin, we praise him!!!!'
  } else if(c.length < 50) {
    var up = toUpper === true ? 'VERY ' : 'very '
    while(c.length < 50) {
      c = c.substring(0, pos) + up + c.substring(pos)
    }
  }
  return c
}

// Sample asserts:
const assert = require('assert')
describe('test my function', ()=> {
  it("mission failed", ()=>{ 
    assert.strictEqual(mustpraise("The evil myjinxin, eat our food, we hate him!"), 
  "The handsome myjinxin, eat our food, we praise him!")
  })
  it("mission failed", ()=>{ 
    assert.strictEqual(mustpraise("The greedy myjinxin, stole my Lollipop, I hate him!"), 
  "The handsome myjinxin, stole my Lollipop, I praise him!")
  })
  it("mission failed", ()=>{ 
    assert.strictEqual(mustpraise("myjinxin, stole my Lollipop."), 
  "myjinxin, stole my Lollipop. The handsome myjinxin, we praise him!!!!")
  })
  it("mission failed", ()=>{ 
    assert.strictEqual(mustpraise("The UGLY myjinxin, stole my Lollipop."), 
  "The VERY VERY HANDSOME myjinxin, stole my Lollipop.")
  })
})


