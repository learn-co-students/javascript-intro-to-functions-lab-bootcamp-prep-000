function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}
function logWhisper(string) {
  console.log('hello')
  return string.toUpperCase()
}

function sayHiToGrandma (greeting) {
  if (greeting.toLowerCase() === greeting) {
    return "I can't hear you!"
}
  if (greeting.toUpperCase() === greeting) {
    return "YES INDEED!"
}
  if (greeting === "I love you, Grandma.") {
    return "I love you, too."
}
}
