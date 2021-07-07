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
  var lowercase = "hello"
  lowercase.toLowerCase() === lowercase // true
  var uppercase = "HELLO"
  uppercase.toUpperCase() === uppercase // true
  var mixedCase = "I love you, Grandma."
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false

  if (string === lowercase)
  {return "I can't hear you!"
} else if (string === uppercase)
  {return "YES INDEED!"
} else (string === mixedCase)
  {return "I love you, too."
  }
}
