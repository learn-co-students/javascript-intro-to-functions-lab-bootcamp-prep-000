var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase 
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase 
 
var mixedCase = 'Hi there!'


function shout(string) {
  return (string.toUpperCase())
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
  
  if (string = uppercase) {
    return "I can't hear you!"
  } else if (string === lowercase) {
    return "YES INDEED!"
  } else if (string === mixedCase) {
    return "I love you, too"
  }
}
