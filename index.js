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
  var upper = string
  if (upper.toUpperCase() === upper) {
  return('YES INDEED!')
}
  else if (upper.toLowerCase() === upper) {
  return("I can't hear you!")
}
else if (upper === "I love you, Grandma.") {
  return ("I love you, too.")
}
}
