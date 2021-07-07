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
function sayHiToGrandma (string) { //string = "hello" === string.toLowerCase() // "hello"
  if (string === string.toLowerCase()) { // is the string provided a lower case string? we test via comparison
    return ("I can't hear you!")
  } else if (string === string.toUpperCase()){
    return ("YES INDEED!")
  } else if (string = "I love you, Grandma.") {
    return ("I love you, too.")

  }
}
