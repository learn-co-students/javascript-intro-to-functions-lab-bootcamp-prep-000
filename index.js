function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var allcaps = string.toUpperCase()
  console.log(allcaps);
}

function logWhisper(string){
  var all_lower = string.toLowerCase()
  console.log(all_lower)
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
