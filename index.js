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
function sayHiToGrandma(string){
  var lowercase = string
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  }

}

function sayHiToGrandma(string) {
  var uppercase = string
  if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }
}
