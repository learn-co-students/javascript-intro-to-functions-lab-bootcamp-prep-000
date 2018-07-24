/*
My turn with Functions
 */
 
function shout(string) {
  var inShout = string.toUpperCase()
  logShout(inShout)
  return inShout
}
// ReferenceError: shout is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'HELLO'
// -- fixed with string.toUpperCase()

function whisper(string) {
  var inWhisper = string.toLowerCase()
  logWhisper(inWhisper)
  return inWhisper
}
// ReferenceError: whisper is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'hello'
// -- fixed with string.toLowerCase()

function logShout(string) {
  var inShout = string
  console.log('I shouted',inShout)
}
// ReferenceError: logShout is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
  var inWhisper = string
  console.log('I whispered',inWhisper)
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
  //
  //console.log("Is",inPhrase.toUpperCase(),"ALL UPPERCASE?")
  //console.log("Is",inPhrase.toLowerCase(),"ALL LOWERCASE?")
  //
  console.log("Grandma tried to hear",inPhrase)

// when inPharse is lowercase return outPhrase1
// when inPhrase is uppercase return outPhrase2
// when inPhrase is 'I love you, Grandma.' return outPhrase3

  if (inPhrase === "I love you, Grandma.") {
    console.log("Grandma replied",outPhrase3)
    return outPhrase3
  } else if (inPhrase === "HELLO") {
    console.log("Grandma replied",outPhrase2)
    return outPhrase2
  } else if (inPhrase === "hello") {
    console.log("Grandma replied",outPhrase1)
    return outPhrase1
  }
// ReferenceError: sayHiToGrandma is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// -- fixed with return outPhrase1
// NEW Error: Expected undefined to equal 'YES INDEED!'
// -- fixed with return outPhrase2
// NEW Error: Expected undefined to equal 'I love you, too.'
// -- fixed with return outPhrase3
// NEW ERROR: ReferenceError: uppercase is not defined 
// -- if {inPhrase.toUpperCase() === uppercase) {...} -- replaced code
// NEW ERROR: ReferenceError: uppercase is not defined
// -- Note: Same error with ...=== lowercase... as with ...=== uppercase...
// -- if {inPhrase.toLowerCase() === lowercase) {...} -- replaced code
}

/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")

// sayHiToGrandma(shout('Hello'))
shout('HELLO')
// sayHiToGrandma(shout('I love you, Grandma!'))
// sayHiToGrandma(whisper('Hello'))
whisper('hello')
sayHiToGrandma(whisper('I love you, Grandma.'))
 
console.log("Finished talking to Grandma.")

/*
End of my turn with Functions
 */
