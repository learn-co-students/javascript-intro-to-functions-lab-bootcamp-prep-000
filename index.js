function shout() {
  return arguments[0].toUpperCase();
}

function whisper() {
  return arguments[0].toLowerCase();
}

function logShout() {
  console.log(arguments[0].toUpperCase());
}

function logWhisper() {
  console.log(arguments[0].toLowerCase());
}

function sayHiToGrandma() {
  if(arguments[0].toLowerCase() === arguments[0]) return "I can't hear you!";
  if(arguments[0].toUpperCase() === arguments[0]) return "YES INDEED!";
  if(arguments[0] === "I love you, Grandma.") return "I love you, too."
}
