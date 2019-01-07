
// take string and return in uppercase
function shout(string) {
  return string.toUpperCase()
}

// take string and return lowercase
function whisper(string) {
  return string.toLowerCase()
}

// log string in uppercase
function logShout(string) {
  console.log(string.toUpperCase())
}

// log string in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
