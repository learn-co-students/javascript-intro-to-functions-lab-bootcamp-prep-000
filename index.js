function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
  return string.toUpperCase()
}
function logWhisper(string) {
  console.log(string.toLowerCase())
  return string.toLowerCase()
}
function sayHiToGrandma(string) {
  var strResponse
  if (string === "hello"){
    strResponse = "I can't hear you!"
  } else if (string === "HELLO") {
    strResponse = "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    strResponse = "I love you, too."
  }
  return strResponse
}
