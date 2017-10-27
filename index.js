function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var aShout = string.toUpperCase();
  console.log(aShout);
}

function logWhisper(string) {
  var aWhisper = string.toLowerCase();
  console.log(aWhisper);
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
