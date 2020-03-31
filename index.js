function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

if ('string' === lowercase()){
  return "I can't hear you!"
} else if ('string' === uppercase()){
  return "YES INDEED!"
} else {
    return "I love you, too."
}
