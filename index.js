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

function sayHiToGrandma(string) {
 var uppercase = string
 var lowercase = string
 var whatever = string
 
 if (string.toUpperCase() === uppercase) {
      return 'YES INDEED!'
} else if (string.toLowerCase() === lowercase) {
      return 'I can\'t hear you!'
} else if (string === whatever) {
  return 'I love you, too.'
}
} 

