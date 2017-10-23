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

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

function sayHiToGrandma(string) {
  if ("I love you, Grandma") {
    return "I love you, too."
  }
  else if (string = uppercase.toUpperCase()) {
    return "YES INDEED!"
  }
  else if (lowercase) {
    return "I can't hear you!"
}
}
