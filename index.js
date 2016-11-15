function shout(string) {
  return string.toUpperCase() // string returned to uppercase
};

function whisper(string) {
  return string.toLowerCase() //string returned to lowercase
};

function logShout(string) {
  console.log(string.toUpperCase()) //string logged to uppercase
};

function logWhisper(string) {
  console.log(string.toLowerCase()) //string logged to lowercase
};

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"; // response when volume too low
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"; // response when volume adequate
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";  // response when the magic words are spoken
  }
}
