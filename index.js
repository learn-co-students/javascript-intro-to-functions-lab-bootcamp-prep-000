function shout(name) {
  return name.toString().toUpperCase();
}

function whisper(name) {
  return name.toString().toLowerCase();
}

function logShout(name) {
  console.log(name.toString().toUpperCase());
}

function logWhisper(name) {
  console.log(name.toString().toLowerCase());
}

function sayHiToGrandma(name) {
  if ( name.toLowerCase() === name ) {
    return "I can't hear you!";
  } else if ( name.toUpperCase() === name ) {
    return "YES INDEED!";
  } else if ( name === "I love you, Grandma." ) {
    return "I love you, too.";
  }
}
