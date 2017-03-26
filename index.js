function shout(string) {
  return string.toUpperCase ()
}

function whisper(string) {
  return string.toLowerCase ()
}

function logShout(string) {
  console.log ('HELLO')
}

function logWhisper(string) {
  console.log ('hello')
}

var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

function sayHiToGrandma(string) {
  switch (string){
    case 'hello':
    return "I can't hear you!"
    case "HELLO":
    return "YES INDEED!"
    case "I love you, Grandma.":
    return "I love you, too."
}
}
