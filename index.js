function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(msg) {
  console.log(shout(msg));
}

function logWhisper(msg) {
  console.log(whisper(msg));
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!";
  } else if (string === shout(string)) {
    return 'YES INDEED!';
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}