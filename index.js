function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
var uppercase = "HELLO"
var lowercase = "hello"
function sayHiToGrandma(string){
  if (uppercase.toUpperCase() == string){
    return "YES INDEED!"
  }
  if (lowercase.toLowerCase() == string){
    return "I can't hear you!"
  }
  if (string == "I love you, Grandma."){
    return 'I love you, too.'
  }
}
