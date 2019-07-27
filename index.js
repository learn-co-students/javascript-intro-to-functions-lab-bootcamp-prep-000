var uppercase = "HELLO!"
var lowercase = "hello!"
var mixedCase = "I love you, Grandma!"


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
  if (string === lowercase)
  return `I can\'t hear you!`;
  if (string === uppercase)
  return `YES INDEED!`;
  if (string === mixedCase)
  return `I love you, too.`;
}

