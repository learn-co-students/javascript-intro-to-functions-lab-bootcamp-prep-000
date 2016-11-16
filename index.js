function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(uppercase);
}

function logWhisper(string) {
  console.log(lowercase);
}

var lowercase = 'hello'
var uppercase = 'HELLO'
var mixedCase = "I love you, Grandma."

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  } else if (string === mixedCase) {
    return "I love you, too.";
  }
}
