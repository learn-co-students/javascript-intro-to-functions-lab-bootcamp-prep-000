function shout(string) {
  var shouting = string.toUpperCase();
  return shouting
}

//console.log(shout("lalala"));

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
  if (string == "I love you, Grandma.") {
    return "I love you, too.";
  } else if (string == string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!";
  }
  console.log(string);
  console.log(string.toLowerCase());
  console.log(string.toUpperCase());
}

console.log(sayHiToGrandma("I love you, Grandma"));
