function shout(word) {
  return word.toUpperCase();
}
function whisper(word) {
  return word.toLowerCase()
}
function logShout(word) {
  console.log(word.toUpperCase())
}
function logWhisper(word) {
  console.log(word.toLowerCase())
}
function sayHiToGrandma (word) {
  if (word === word.toUpperCase()) {
    return "YES INDEED!"
  } else if (word === word.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (word === "I love you, Grandma.") {
    return "I love you, too."
  }
}
