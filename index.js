function shout(string) {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  console.log(shout(string));
};

function logWhisper(string) {
  console.log(whisper(string));
};

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return 'I love you, too.';
  } else {
    return (string === shout(string)) ? "YES INDEED!":"I can't hear you!";
  }
}
