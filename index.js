/*
My turn with Functions
 */
 
function shout(string) {
  var inSomething = string
  var outShout = inSomething.toUpperCase()
  console.log('I said',inSomething,'which shout changed to',outShout) 
  logShout(outShout)
  return outShout
}

function whisper(string) {
  var inSomething = string
  var outWhisper = inSomething.toLowerCase()
  console.log('I said',inSomething,'which whisper changed to',outWhisper) 
  logWhisper(outWhisper)
  return outWhisper
}

function logShout(string) {
  var inShout = string
  console.log('I shouted', inShout)
  console.log('I should have shouted')
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  var inWhisper = string
  console.log("I whispered", inWhisper) 
  console.log('I should have whispered')
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {

  function logGrandmaReply (string) {
    var reply = string
    console.log("Grandma replied",reply)
    console.log(' ')
  }

  var inPhrase = string
  var outPhrase1 = 'I can\'t hear you!'
  var outPhrase2 = 'YES INDEED!'
  var outPhrase3 = 'I love you, too.'
  var noReply = " "
  
  console.log("Grandma tried to hear",inPhrase)

// when inPharse is lowercase return outPhrase1
// when inPhrase is uppercase return outPhrase2
// when inPhrase is 'I love you, Grandma.' return outPhrase3
// otherwise return noReply

  if (inPhrase.toLowerCase() === inPhrase) { 
    logGrandmaReply(outPhrase1)
    return outPhrase1
  } else if (inPhrase.toUpperCase() === inPhrase) { 
    logGrandmaReply(outPhrase2)
    return outPhrase2
  } else if (inPhrase === "I love you, Grandma.") {
    logGrandmaReply(outPhrase3)
    return outPhrase3
  } else {
    logGrandmaReply(noReply)
  }
}

/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")

// Use uppercase, lowercase, and mixed case 
sayHiToGrandma(shout('HELLO'))
sayHiToGrandma(shout('hello'))
sayHiToGrandma(shout('Hello'))
sayHiToGrandma(whisper('HELLO'))
sayHiToGrandma(whisper('hello'))
sayHiToGrandma(whisper('Hello'))
sayHiToGrandma(shout('I love you, Grandma.'))
sayHiToGrandma(whisper('I love you, Grandma.'))
sayHiToGrandma('I love you, Grandma.')
sayHiToGrandma('Can you hear me, Grandma?')

console.log("Finished talking to Grandma.")
// Editor Warning on line above: Missing semicolon./Too many errors. (93% scanned).

/*
End of my turn with Functions
 */
