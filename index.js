function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase === string) {
      return "YES INDEED!"
  } else if (string == "I love you, Grandma."){
      return "Ilove you, too."
  }
}