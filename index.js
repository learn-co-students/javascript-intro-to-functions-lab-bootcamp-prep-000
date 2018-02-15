var uppercase = "HELLO"
 
uppercase.toUpperCase() === uppercase 
 
var lowercase = 'hello'
 
lowercase.toLowerCase() === lowercase 
 
var mixedCase = 'Hi there'
 
mixedCase.toLowerCase() === mixedCase 
 
mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  if(string == "I love you, Grandma.") {
    return("I love you, too.")
  }else if (string === uppercase) {
    return("YES INDEED!")
  } else {
    return "I can\'t hear you!"
  }
}