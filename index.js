function shout(thing) {
  return thing.toUpperCase();
}

function whisper(i) {
  return i.toLowerCase();
}

function logShout(i) {
  console.log(i.toUpperCase());
}

function logWhisper(i) {
  console.log(i.toLowerCase());
}

function sayHiToGrandma(i) {
  if(i === i.toLowerCase()) {
    return "I can\'t hear you!"
  } else if(i === i.toUpperCase()) {
    return "YES INDEED!"
  } else if (i === "I love you, Grandma.") {
    return "I love you, too.";
  }
}