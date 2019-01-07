const shout = (string) => string.toUpperCase();

const whisper = (string) => string.toLowerCase();

const logShout = (string) => console.log(string.toUpperCase());

const logWhisper = (string) => console.log(string.toLowerCase());

const sayHiToGrandma = (string) => {
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
};
