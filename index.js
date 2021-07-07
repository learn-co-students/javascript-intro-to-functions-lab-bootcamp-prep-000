function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  var y = 'HELLO'
  console.log(y)
}
function logWhisper(string){
  var y = 'hello'
  console.log(y)
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  var other = "I love you, Grandma."
  if (string==uppercase) {
    return "YES INDEED!"
  }
  if (string==lowercase) {
    return "I can't hear you!"
  }
  if (string==other) {
    return "I love you, too."
  }
}
