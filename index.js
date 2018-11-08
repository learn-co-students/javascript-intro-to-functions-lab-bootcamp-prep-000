function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  console.log("HELLO")
}

function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(phrase) {
  return `${phrase}`
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() != string && string.toLowerCase() != string) {
    return "I love you, too.";
  } else {
    return "What did you say?"
  }
}
