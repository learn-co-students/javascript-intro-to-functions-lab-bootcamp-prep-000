function shout(scream) {
  return scream.toUpperCase();
}

function whisper(quiet) {
  return quiet.toLowerCase();
}

function logShout(scream) {
  console.log(scream.toUpperCase());
}

function logWhisper(quiet) {
  console.log(quiet.toLowerCase());
}

function sayHiToGrandma(canSheHear) {
  if (canSheHear === canSheHear.toLowerCase()) {
    return "I can't hear you!";
  } else if (canSheHear === canSheHear.toUpperCase()) {
    return "YES INDEED!";
  } else if (canSheHear === "I love you, Grandma.") {
    return "I love you, too.";
  }
  
}