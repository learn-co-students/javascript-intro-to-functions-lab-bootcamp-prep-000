/*
My turn with Functions
 */
 
function shout(string) {
  logShout(string.toUpperCase())
  return string.toUpperCase()
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
  console.log('I shouted',string )
}
// ReferenceError: logShout is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
  console.log('I whispered',string)
}
// ReferenceError: logWhisper is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'hello' ]

function sayHiToGrandma(string) {
  var inPhrase = string
  var outPhrase = 
  console.log("Grandma tries to hear",aPhrase)
  if (aPhrase === "I love you, Grandma.") {
    console.log("Grandma says I love you, too.") 
  } else if (aPhrase === "I LOVE YOU, GRANDMA!") {
    console.log("Grandma says I love you, too.") 
  }
/*
} else if (aPhrase.toLowerCase() === lowercase) {
    console.log("Grandma says I can\'t hear you!")
  } else if (aPhrase.toUpperCase() === uppercase) {
    console.log("Grandma says YES INDEED!") 

  if (lowercase.aPhrase === lowercase) {
    console.log("Grandma says I can\'t hear you!")
  } else if (uppercase.aPhrase === uppercase) {
    console.log("Grandma says YES INDEED!") 
  } else if (uppercase.aPhrase === "I love you, Grandma") { 
  //          (lowercase.aPhrase === "I love you, Grandma") {
    console.log("Grandma says I love you, too.")
  }
  }
 */
}
// ReferenceError: sayHiToGrandma is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// NEW Error: Expected undefined to equal 'YES INDEED!'
// NEW Error: Expected undefined to equal 'I love you, too.'
/*
End of Functions 
*/

/*
Main routine
 */
 
console.log("Starting to talk to Grandma.")
sayHiToGrandma(shout('Hello!'))
sayHiToGrandma(shout('I love you, Grandma!'))
sayHiToGrandma(whisper('Hello.'))
sayHiToGrandma(whisper('I love you, Grandma.'))
console.log("Finished talking to Grandma.")

/*
End of my turn with Functions
 */
