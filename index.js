

function shout(s) {
  return s.toUpperCase();
}

function whisper(s) {
  return s.toLowerCase();
}

function logShout(s) {
  console.log(shout(s));
}

function logWhisper(s) {
  console.log(whisper(s));
}

function sayHiToGrandma(s) {
  if (s.toLowerCase() === s) {
    return "I can't hear you!"
  } else if (s.toUpperCase() === s) {
    return "YES INDEED!"
  } else if (s === "I love you, Grandma.") {
    return "I love you, too."
  }
}
