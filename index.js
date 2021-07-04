function shout(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}

function logShout(word) {
  console.log(shout(word));
}

function logWhisper(word) {
  console.log(whisper(word));
}

function sayHiToGrandma(word) {
  if (word === "I love you, Grandma.") {
    return "I love you, too."
  } else if (whisper(word) === word) {
    return "I can't hear you!"
  } else if (shout(word) === word) {
    return "YES INDEED!"
  } else {
    return "error"
  }
}