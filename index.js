function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = shout(string)
  console.log(string)
}

function logWhisper(string){
  string = whisper(string)
  console.log(string)
}

function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  var love = "I love you, Grandma."
  if (string === love) {
    return "I love you, too."
  }
}
