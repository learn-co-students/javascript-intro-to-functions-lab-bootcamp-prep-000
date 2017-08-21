function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
var helloGrandma = "hello"

function logWhisper(string) {
  console.log(helloGrandma)
}
var shoutGrandma = "HELLO"

function logShout(string) {
  console.log(shoutGrandma)
}

var loveGrandma = "I love you, too."
var whatGrandma = "I can't hear you!"

function sayHiToGrandma(string){
  if (string.toLowerCase()) {
    return(loveGrandma)
  }else {
    return(whatGrandma)
  }
};

function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return("YES INDEED!")
  } else if (string === string.toLowerCase()) {
    return("I can't hear you!")
  } else if (string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}
