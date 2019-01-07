function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(shout(str));
}

function logWhisper(str) {
  console.log(whisper(str));
}

function sayHiToGrandma(str) {
  let love = "I love you, Grandma.";
  if (str == whisper(str)) {
    return "I can't hear you!";
  }
  else if (str == shout(str)) {
    return "YES INDEED!";
  }
  else if (str == love) {
    return "I love you, too.";
  }
}
