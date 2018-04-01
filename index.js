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
  let tooQuiet = string.toLowerCase();
  let loud = string.toUpperCase();
  let love = "I love you, too.";
  
  if (string === tooQuiet) {
    return "I can't hear you!";
  } else if (string === loud) {
    return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
    return love;
  }
}