//define shout function
function shout(string) {
  return string.toUpperCase()
}

//define whisper function
function whisper(string) {
  return string.toLowerCase()
}

//define logShout function
function logShout(string) {
  console.log(string.toUpperCase())
}

//define logWhisper function
function logWhisper(string) {
  console.log(string.toLowerCase())
}

//define sayHiToGrandma function
function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
    return "I can't hear you!"
  if (string === "I love you, Grandma.")
    return "I love you, too."
  else {
    return "YES INDEED!"
  }
}
