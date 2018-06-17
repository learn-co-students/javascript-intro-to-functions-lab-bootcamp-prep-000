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
function logWhisper(string)  {
    console.log(string.toLowerCase())
}
//define sayHiToGrandma function
function sayHiToGrandma(string)  {
    if (string.toUpperCase() === string) {
      return ("YES INDEED!")
  } if (string.toLowerCase() === string) {
      return ("I can't hear you!")
  } else if (string) {
      return ("I love you, too.")
  }
}
