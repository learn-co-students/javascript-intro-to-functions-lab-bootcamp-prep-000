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
  var up = string.toUpperCase()
  var low = string.toLowerCase()
  if string === up {
    return "YES INDEED"
  }
  else if string === low {
    return "I can't hear you!"
  }
  else if string === "I love you, Grandma" {
    return "I love you, too"
  }
}
