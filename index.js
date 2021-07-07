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
  // if sayHiToGrandma is lowercase, return i can't hear you
  // else if sayHiToGrandma is uppercase, return yes indeed
  // else if sayHiToGrandma is "I love you, Grandma.", return "I love you too."
  
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

}