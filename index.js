function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string) // string returns a string variable 'hello'
  console.log(string.toUpperCase()) // which is convereted to upper via the toUpperCase() method which returns a string variable
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) { // if string is lowercase
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) { // if string is upper
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}