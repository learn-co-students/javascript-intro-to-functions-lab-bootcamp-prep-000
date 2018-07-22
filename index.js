/*
My turn with Functions
 */
 
function shout(string) {
  var shout = string.toUpperCase()
  logShout(shout)
  return shout
}
// ReferenceError: shout is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'HELLO'
// -- fixed with string.toUpperCase()

function whisper(string) {
  logWhisper(string.toLowerCase())
  return string.toLowerCase()
}
// ReferenceError: whisper is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'hello'
// -- fixed with string.toLowerCase()

function logShout(string) {
  var shout = string
  console.log('I shouted',shout)
}
// ReferenceError: logShout is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
  var whisper = string
  console.log('I whispered',whisper)
}
// ReferenceError: logWhisper is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'hello' ]

function sayHiToGrandma(string) {
  
  function logGrandmaReply (string) {
    var reply = string
    console.log(reply)
  }
 
  var inPhrase = string
  var outPhrase1 = 'I can\'t hear you!'
  var outPhrase2 = 'YES INDEED!'
  var outPhrase3 = 'I love you, too.'
  
  console.log("Grandma tried to hear",inPhrase)

// when inPharse is lowercase return outPhrase1
// when inPhrase is uppercase return outPhrase2
// when inPhrase is 'I love you, Grandma.' return outPhrase3

  if (inPhrase === "I love you, Grandma.") {
    console.log("Grandma replied",outPhrase3)
    return outPhrase3
  } else if (inPhrase === "I LOVE YOU, GRANDMA!") {
    console.log("Grandma replied",outPhrase3)
    return outPhrase3
  } else if (string.toUpperCase() === uppercase) {
    console.log("Grandma replied",outPhrase2)
    return outPhrase2
  }

}
// ReferenceError: sayHiToGrandma is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// NEW Error: Expected undefined to equal 'YES INDEED!'
// NEW Error: Expected undefined to equal 'I love you, too.'
// -- fixed with return outPhrase3

/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")
sayHiToGrandma(shout('Hello, Grandma!'))
sayHiToGrandma(shout('I love you, Grandma!'))
sayHiToGrandma(whisper('Hello, Grandma.'))
sayHiToGrandma(whisper('I love you, Grandma.'))
console.log("Finished talking to Grandma.")

/*
End of my turn with Functions
 */
