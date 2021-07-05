var uppercase, lowercase

function shout(string) {
  return string.toUpperCase()
}

shout("hello")

function logShout(string) {
  uppercase = string.toUpperCase()
  string = lowercase;
  console.log(uppercase)
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  lowercase = string.toLowerCase()
  string = uppercase
  console.log(lowercase)
}

logWhisper("HELLO")

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");
