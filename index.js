function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO');
}

function logWhisper(string){
  console.log('hello')
}

var uppercase = "HELLO"


var lowercase = 'hello'


var mixedCase = 'Hi there!'




function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!"
  }
  if (string === uppercase) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma."){
  return "I love you, too."
  }
}
