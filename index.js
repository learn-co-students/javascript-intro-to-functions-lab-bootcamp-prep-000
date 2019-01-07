function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var string = shout(string)
  console.log(string)
}

function logWhisper(string) {
  var string = whisper(string)
  console.log(string)
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}


console.log(sayHiToGrandma("I love you, Grandma."))
