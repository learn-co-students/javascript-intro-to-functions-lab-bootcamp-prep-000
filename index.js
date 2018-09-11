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
  console.log('hello')
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  if (string.toLowerCase() !== string && string.toUpperCase() !== string) {
    return "I love you\, too.";
  }
}