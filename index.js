function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log (string.toUpperCase());
}

function logWhisper(string) {
  console.log (string.toLowerCase());
}

function sayHiToGrandma(string) {
  var a = string;
  if (a.toLowerCase() === a)
  return "I can\'t hear you!";
  
else if (a.toUpperCase() === a)
  return "YES INDEED!";
  
else if (a === "I love you, Grandma.")
  return "I love you, too.";
}