function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (shout(string) === string) {
    return "YES INDEED!";
  } else if (whisper(string) === string) {
    return 'I can\'t hear you!';
  }
}
