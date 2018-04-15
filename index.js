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
  var lowered = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if (string === lowered) {
    return "I can't hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
