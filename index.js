/*
function logShout(string) {
  console.log('logShout logged: '' string)
}
// fixed ReferenceError: logShout is not defined by creating function
// NEW Error: spy was never called with [ 'HELLO' ]
 */
function shout(string) {
  return string.toUpperCase()
logShout(string.toUpperCase())
}
// fixed ReferenceError: shout is not defined by creating function
// NEW Error: Expected undefined to equal 'HELLO'

function whisper(string) {
//  return string.toLowerCase()
}
// fixed ReferenceError: whisper is not defined by creating function
// NEW Error: Expected undefined to equal 'hello'

function logShout(string) {
  console.log(string, ' ', string)
    spy('test')
}
// fixed ReferenceError: logShout is not defined by creating function
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
  console.log(string)
}
// fixed ReferenceError: logWhisper is not defined by creating function
// NEW Error: spy was never called with [ 'hello' ]

function sayHiToGrandma(string) {
//  console.log(string)
}
// fixed ReferenceError: sayHiToGrandma is not defined by creating function
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// NEW Error: Expected undefined to equal 'YES INDEED!'
// NEW Error: Expected undefined to equal 'I love you, too.'

console.log("My test run first log line.")
sayHiToGrandma(shout('Hello'))

// End of code lines
