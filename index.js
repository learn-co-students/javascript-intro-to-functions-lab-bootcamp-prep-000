const quiet = "I can\'t hear you!";
const loud = "YES INDEED!";
const grandma = "I love you, Grandma.";
const love = "I love you, too.";

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
  if (string === grandma) {
      return love;
  } else {
    if (string.toLowerCase() === string) {
      return quiet;
    } else if (string.toUpperCase() === string) {
      return loud;
    }
  }
}
