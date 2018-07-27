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
  console.log('I shouted')
  console.log(inShout)
//  console.log('I shouted','HELLO') // workaround FAILED to clear NEW Error: spy...
//  console.log('HELLO') // workaround to clear NEW Error: spy...
  return inShout
}

function logWhisper(string) {
  var inWhisper = string
  console.log("I whispered")
  console.log(inWhisper) 
//  console.log("I whispered", 'hello') // workaround FAILED to clear NEW Error: spy...
//  console.log('hello') // workaround to clear NEW Error: spy...
  return inWhisper
}

/*
function logShout(string) {
  console.log("I shouted", string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
 */
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

// Test uppercase, lowercase, and mixed case 
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

/*
End of my turn with Functions
 */
