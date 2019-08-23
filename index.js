function shout(name) {
  return name.toUpperCase();
}

function whisper(name) {
  return name.toLowerCase();
}

function logShout(name) {
  console.log(name.toUpperCase());
}

function logWhisper(name) {
  console.log(name.toLowerCase());
}

function sayHiToGrandma(text) {
  if (text === "I love you, Grandma.") {
   return "I love you, too."
 }else
  if (text.toLowerCase() === text) {
    return "I can't hear you!";
  }
  else if (text.toUpperCase() === text) {
    return "YES INDEED!";
  }
}
