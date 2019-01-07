function shout(str) {
  var shoutString = str.toUpperCase();
  return shoutString;
}

function whisper(str) {
  var whisperString = str.toLowerCase();
  return whisperString;
}

function logShout(str) {
  var Shout = str.toUpperCase();
  console.log(Shout);
}

function logWhisper(str) {
  var Whisper = str.toLowerCase();
  console.log(Whisper);
}

function sayHiToGrandma(str) {
  if (str === str.toLowerCase()) {
    return "I can't hear you!"
  } else if (str === str.toUpperCase()) {
    return "YES INDEED!"
  }

  if (str === "I love you, Grandma.") {
    return "I love you, too."
  }
}
