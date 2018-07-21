/*
My turn with Functions
 */
 
function shout(string) {
  return string.toUpperCase()
  logShout(string.toUpperCase())
}
// fixed ReferenceError: shout is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'HELLO'
// -- fixed with string.toUpperCase()

function whisper(string) {
  return string.toLowerCase()
  logWhisper(string.toLowerCase())
}
// fixed ReferenceError: whisper is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'hello'
// -- fixed with string.toLowerCase()

function logShout(string) {
  console.log('I shouted ${string}')
}
// fixed ReferenceError: logShout is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
  console.log('I whispered ${string}')
}
// fixed ReferenceError: logWhisper is not defined 
// -- fixed by creating function
// NEW Error: spy was never called with [ 'hello' ]

function sayHiToGrandma(string) {
//  console.log(string)
}
// fixed ReferenceError: sayHiToGrandma is not defined 
// -- fixed by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// NEW Error: Expected undefined to equal 'YES INDEED!'
// NEW Error: Expected undefined to equal 'I love you, too.'

console.log("Starting to talk to Grandma.")
sayHiToGrandma(shout('Hello!'))
sayHiToGrandma(shout('I love you, Grandma!'))
sayHiToGrandma(whisper('Hello.'))
sayHiToGrandma(whisper('I love you, Grandma.'))
console.log("Finished talking to Grandma.")

/*
End of my turn with Functions
 */
