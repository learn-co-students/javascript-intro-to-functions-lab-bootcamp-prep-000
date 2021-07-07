function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  str = str.toUpperCase();
  console.log(str);
}

function logWhisper(str) {
  str = str.toLowerCase();
  console.log(str);
}

function sayHiToGrandma(str) {
  if (str === str.toLowerCase()) {
    return "I can't hear you!";
  } else if (str === str.toUpperCase()) {
    return "YES INDEED!";
  } else if (str === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
