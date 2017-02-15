function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function sayHiToGrandma(str) {
  if(str == shout(str)) return "YES INDEED!";
  if(str == whisper(str)) return "I can't hear you!"
  return "I love you, too.";
}

function logShout(str) {
  console.log(shout(str));
}

function logWhisper(str) {
  console.log(whisper(str));
}