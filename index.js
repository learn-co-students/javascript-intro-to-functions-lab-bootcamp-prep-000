
//Functions First!!

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
 console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function  sayHiToGrandma(string) {
  if (string == string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
  if (string == string.toLowerCase()) {
    return "I can\'t hear you!"
  }
} // sayHiToGrandma







// End of functions, time to test them
// Time to call them out

shout('hello')        // call function to uppercase with arg
whisper('HELLO')      // call function to lowercase with arg
logShout('hello')     // call function to log the shout this time with arg
logWhisper('Hello')   // call function to log the whisper this time with arg
sayHiToGrandma('THE SKY IS BLUE')
sayHiToGrandma('I Love you Grandma.')
sayHiToGrandma('quiet words')
