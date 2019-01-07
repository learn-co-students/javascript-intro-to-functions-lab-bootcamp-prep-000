function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(shout(string));
}

function logWhisper(string) {
  return console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if(shout(string) === string) {
    return "YES INDEED!"
  } else if(whisper(string) === string) {
    return "I can't hear you!";
  } else {
    return 'I love you, too.';
  }
}
