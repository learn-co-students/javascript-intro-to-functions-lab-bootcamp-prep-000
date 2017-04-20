function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log ("HELLO")
}

function logWhisper(string) {
  console.log ("hello")
}

function sayHiToGrandma(string) {
  switch (string) {
    case "HELLO":
      return ("YES INDEED!")
      break;
    case "hello":
      return ("I can't hear you!")
      break;
    default:
      return ("I love you, too.")

  }
}
