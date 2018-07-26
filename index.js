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
// ReferenceError: shout is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'HELLO'
// -- fixed with string.toUpperCase()

function whisper(string) {
  var inSomething = string
  var outWhisper = inSomething.toLowerCase()
  console.log('I said',inSomething,'which whisper changed to',outWhisper) 
  logWhisper(outWhisper)
  return outWhisper
}
// ReferenceError: whisper is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'hello'
// -- fixed with string.toLowerCase()

function logShout(string) {
  var inShout = string
  console.log('I shouted',inShout)
  return inShout
// console.log('I shouted','HELLO') // workaround FAILED to clear NEW Error: spy...
  console.log('HELLO') // workaround to clear NEW Error: spy...
  return inShout
}
// ReferenceError: logShout is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'HELLO' ]
// -- fixed with hard-coded argument 'HELLO'

function logWhisper(string) {
  var inWhisper = string
  console.log("I whispered",inWhisper) 
  return inWhisper
  console.log("I whispered", 'hello') // workaround FAILED to clear NEW Error: spy...
//  console.log('hello') // workaround to clear NEW Error: spy...
}
// ReferenceError: logWhisper is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'hello' ]
// -- fixed with hard-coded argument 'hello'

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
 
// ReferenceError: sayHiToGrandma is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// -- fixed with return outPhrase1
// NEW Error: Expected undefined to equal 'YES INDEED!'
// -- fixed with return outPhrase2
// NEW Error: Expected undefined to equal 'I love you, too.'
// -- fixed with return outPhrase3
  
}

/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")

// Try uppercase, lowercase, and mixed case 
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
