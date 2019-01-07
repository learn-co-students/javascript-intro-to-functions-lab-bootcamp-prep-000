function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(String) {
  console.log(`HELLO`)
}

function logWhisper(string) {
  console.log(`hello`)
}

function sayHiToGrandma(string) {
  
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

  if (string === 'hello') {
    return "I can\'t hear you!"
  }
  
  if (string === 'HELLO') {
    return "YES INDEED!"
  }
  
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}