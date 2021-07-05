function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  let result = "";
  if (str === str.toLowerCase()) {
     result = "I can't hear you!";
  } else if (str === "I love you, Grandma.") {
    result = "I love you, too."
  } else {
    result = "YES INDEED!"
  }
  return result;
}