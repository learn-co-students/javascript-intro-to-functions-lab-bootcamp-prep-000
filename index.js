function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  return string;
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  return string;
}

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase()
  var lowerCase = string.toLowerCase()
  if (lowerCase === string) {
    return 'I can\'t hear you!'
  } else if (upperCase === string) {
    return 'YES INDEED!'
  } else if (string === "I love you, Grandma.") {
    return 'I love you, too.'
  } else {
    return ""
    }
}
