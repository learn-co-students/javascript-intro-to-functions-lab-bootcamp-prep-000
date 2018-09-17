function shout (string) {
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
  if(string.valueOf() === "hello") {
    return "I can\'t hear you!";
  } else if (string.valueOf() === "HELLO") {
    return "YES INDEED!";
  } else if (string.valueOf() === "I love you, Grandma.") {
    return "I love you, too.";
  }
}