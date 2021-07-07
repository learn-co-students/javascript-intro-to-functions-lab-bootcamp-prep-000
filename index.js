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

var lilwhisper = "hello"
var hear = "GRANDMA"
var mixedCase = "I love you, Grandma."

function sayHiToGrandma(string) {
  if (string.toLowerCase() === lilwhisper)
  return "I can't hear you!";
  else if (string.toUpperCase() === hear)
  return "YES INDEED!";
  else if (string === "I love you, Grandma.")
  return "I love you, too.";
  else
  return "test failed";
}

