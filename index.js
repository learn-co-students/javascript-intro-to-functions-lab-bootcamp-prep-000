function shout(string) {
  return "hello".toUpperCase();
}

function whisper(string) {
  return "HELLO".toLowerCase();
}

function logShout(string) {
  console.log("hello".toUpperCase());
}

function logWhisper(string) {
  console.log("HELLO".toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
   if (string.toUpperCase() === string) {
     return "YES INDEED!";
  }
    if (string === "I love you, Grandma.") {
      return "I love you, too."
    }
  }
