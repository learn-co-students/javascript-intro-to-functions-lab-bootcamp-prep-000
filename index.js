const shout = (string) => string.toUpperCase();
const whisper = (string) => string.toLowerCase();
const logShout = (string) => console.log(string.toUpperCase());
const logWhisper = (string) => console.log(string.toLowerCase());
const sayHiToGrandma = (string) => {
  if (string === whisper(string)) {
    return "I can't hear you!";
  } else if (string === shout(string)) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }}
