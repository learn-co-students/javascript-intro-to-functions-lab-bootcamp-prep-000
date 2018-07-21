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
  var outPhrase1 = 'I can\'t hear you!'
  var outPhrase2 = 'YES INDEED!'
  var outPhrase3 = 'I love you, too.'
  
  console.log("Grandma tries to hear",inPhrase)
  
  if (inPhrase === "I love you, Grandma.") {
    console.log(outPhrase3)
  } else if (inPhrase === "I LOVE YOU, GRANDMA!") {
    console.log(outPhrase3)
  }

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
