function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = "i love you, grandma."
  var uppercase = string.toUpperCase()
  var mixedcase = "I love you, Grandma."

  if (string === mixedcase){
    return "I love you, too."
  }else if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }else return "Say Whaaaat?"
}
