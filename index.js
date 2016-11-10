function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string))
}
logShout('hello');
function logWhisper(string) {
  console.log(whisper(string))
}
logWhisper('HELLO');
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return "YES INDEED!"
  }
}
