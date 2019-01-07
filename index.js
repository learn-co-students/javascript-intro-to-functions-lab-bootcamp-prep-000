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
  var stringIsLowerCase = string.toLowerCase() === string
  var stringIsUpperCase = string.toUpperCase() === string
  var stringIsILoveYou = string === "I love you, Grandma."
if (stringIsLowerCase) {
  return "I can't hear you!"
}
if (stringIsUpperCase) {
  return "YES INDEED!"
}
if (stringIsILoveYou) {
  return "I love you, too."
}
}
