function shout(string) {
  return string.toUpperCase('Hello!')
}

function whisper(string) {
  return string.toLowerCase ('hello!')
}

function logShout(string){
  console.log(string.toUpperCase('Hello'))
}

function logWhisper(string){
  console.log(string.toLowerCase('hello'))
}

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
if (string === lowercase) {
  return "I can\'t hear you!"}
  else if (string === uppercase) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}

}
