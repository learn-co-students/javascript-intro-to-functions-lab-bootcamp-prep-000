function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var upperCase = shout(string);
  var lowerCase = whisper(string);
  if(string === upperCase) {
    return "YES INDEED!";
  }
  else if(string === lowerCase) {
    return "I can't hear you!";
  }
  else if(string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}

