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
  var loveGram = "I love you, Grandma.";
  return string === string.toLowerCase() ? "I can't hear you!" : string === string.toUpperCase() ? "YES INDEED!" : loveGram ? "I love you, too." : "";

}

// if/else if way to do it....ternary above
/*
if (string === string.toLowerCase()) {
  return "I can't hear you!";
} else if (string === string.toUpperCase()) {
  return "YES INDEED!";
} else if (loveGram) {
  return "I love you, too.";
} */
