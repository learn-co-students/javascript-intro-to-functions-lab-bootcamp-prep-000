function shout(what) {
  return what.toUpperCase();
}

function whisper(what) {
  return what.toLowerCase();
}

function logShout(what) {
  console.log(shout(what));
}

function logWhisper(what) {
  console.log(whisper(what));
}

function sayHiToGrandma(what) {
  if (what === what.toLowerCase()) {
    return "I can't hear you!"
  } else if (what === what.toUpperCase()){
    return "YES INDEED!";
  } else if (what === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
