function shout(string) {
  return string.toUpperCase();
};

var whisper = function(string) {
  return string.toLowerCase();
};

function logShout(string) {
  console.log(string.toUpperCase());
};

function logWhisper(string) {
  console.log(string.toLowerCase())
};

function sayHiToGrandma(string) {
  var upperCase = "HELLO";
  var lowerCase = "hello";

  if (string === lowerCase) {
    return "I can\'t hear you!"
  } else if (string === upperCase) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
};
