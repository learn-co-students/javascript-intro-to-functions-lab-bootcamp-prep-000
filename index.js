function shout (string) {
  return string.toUpperCase();
}

function whisper (string) {
  return string.toLowerCase();
}

function logShout (string) {
  console.log(string.toUpperCase());
  return string.toUpperCase();
}

function logWhisper (string) {
  console.log(string.toLowerCase());
  return string.toLowerCase();
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
  console.log("I can't hear you!");
 } else if (string.toUpperCase() === string) {
  console.log("YES INDEED!");
 } else if ("I love you, Grandma."=== string) {
  console.log("I love you, too.");
 } 
}
