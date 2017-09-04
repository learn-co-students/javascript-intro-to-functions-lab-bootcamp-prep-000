function shout(string) {
  return string.toUpperCase('Hello!')
}

function whisper(string) {
  return string.toLowerCase('Hello!')
}

var uppercase = 'HELLO'

function logShout(string) {
  console.log(uppercase)
}

var lowercase = 'hello'

function logWhisper(string) {
  console.log(lowercase)
}

function sayHiToGrandma(string) {

  var lowercase = "hello"
  var uppercase = "HELLO"

  if (string === lowercase)
    return ("I can't hear you!")

    else if (string === uppercase)
      return ("YES INDEED!")

    else (string === "I love you, Grandma.")
      return ("I love you, too.")
}
