function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase(string);
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lower = string.toLowerCase()
  var upper = string.toUpperCase()
  if(string === lower) {
    return "I can\'t hear you!"
  }
  else if(string === upper) {
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
