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

function sayHiToGrandma(string) {
  
  var uppercase = "HELLO"
 
  uppercase.toUpperCase() === uppercase // true
 
  var lowercase = 'hello'
 
  lowercase.toLowerCase() === lowercase // true
 
  var mixedCase = 'I love you, Grandma.'
 
  mixedCase.toLowerCase() === mixedCase // false
 
  mixedCase.toUpperCase() === mixedCase // false
  
 if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === lowercase) {
    return "I can't hear you!"
  } else {
  return "I love you, too."
}
}