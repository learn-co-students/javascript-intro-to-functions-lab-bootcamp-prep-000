function shout(string) {
  return string.toUpperCase();
}

function whisper(words) {
  return words.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(words) {
  if (words === shout(words)) {
    return "YES INDEED!";
  } else if (words === whisper(words)) {
    return "I can't hear you!";
  } else if (words === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
