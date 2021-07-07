function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(`${string.toUpperCase()}`);
}

function logWhisper(string) {
  console.log(`${string.toLowerCase()}`);
}

function sayHiToGrandma(string) {
  var lowerString = string.toLowerCase();
  var upperString = string.toUpperCase();
  var loveGrandma = "I love you, Grandma.";

  if (string === lowerString) {
    return ("I can\'t hear you!")
  }
  else if (string === upperString) {
    return ("YES INDEED!")
  }
  else if (string === loveGrandma) {
    return ("I love you, too.")
  }
}
