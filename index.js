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
  if (string === "I love you, Grandma.") {
    var message = "I love you, too.";
    return message;
  } else if (string === string.toUpperCase()) {
    message = "YES INDEED!";
    return message;
  } else if (string === string.toLowerCase()) {
    message = "I can\'t hear you!";
    return message;
  };
};
