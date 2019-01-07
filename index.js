function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(spyOn) {
  spyOn = ("HELLO")
  spyOn.toUpperCase === "HELLO"
  console.log(spyOn)
}

function logWhisper(spyOn) {
  spyOn = "hello"
  spyOn.toLowerCase === "hello"
  console.log(spyOn);
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return("I can\'t hear you!")
    } else if (string.toUpperCase() === string) {
    return("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
    return("I love you, too.")
    }
}
