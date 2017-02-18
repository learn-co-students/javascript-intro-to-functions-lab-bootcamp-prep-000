function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout (string) {
  console.log(string.toUpperCase());
}

function logWhisper (string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
    return "I can't hear you!"
  else if (string === string.toUpperCase())
    return "YES INDEED!"
  else if (!(string.toLowerCase === string) && !(string.toUpperCase === string) && string === "I love you, Grandma.")
    return "I love you, too.";
}
// Was just curious if the above would cause an error, it's pointless, but it did not! =D