function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowerCase = string;
  var upperCase = string;
  if (lowerCase.toLowerCase() === lowerCase) {
    return "I can't hear you!";
  } else if (upperCase.toUpperCase() === upperCase) {
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
