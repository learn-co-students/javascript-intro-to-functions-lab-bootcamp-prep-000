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
  var whisper = string.toLowerCase()
  logWhisper(whisper)
  return whisper
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
  } else if (inPhrase === "I LOVE YOU, GRANDMA!") {
    console.log("Grandma replied",outPhrase3)
    return outPhrase3
  } else if (inPhrase.toUpperCase() === "HELLO") {
    console.log("Grandma replied",outPhrase2)
    return outPhrase2
  } else if (inPhrase === "i love you, grandma.") {
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
// NO NEW ERROR for === lowercase; WHY?
// 2 NEW ReferenceError: uppercase is not defined
 
}

/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")

sayHiToGrandma(shout('Hello'))
sayHiToGrandma(shout('I love you, Grandma!'))
sayHiToGrandma(whisper('Hello'))
sayHiToGrandma(whisper('I love you, Grandma.'))
 
console.log("Finished talking to Grandma.")

/*
End of my turn with Functions
 */
