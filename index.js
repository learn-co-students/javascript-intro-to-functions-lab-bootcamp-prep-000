function shout(string) {
  return "HELLO".toUpperCase();
}

function whisper(string) {
  return "HELLO".toLowerCase();
}

function logShout(string) {
  console.log("HELLO".toUpperCase());
}

function logWhisper(string) {
  console.log("HELLO".toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!" ;
  } else if (string.toLowerCase() === string) {
    return 'I can\'t hear you!';
  } else if (string === "I love you, Grandma."){
    return "I love you, too." ;
  }
}
