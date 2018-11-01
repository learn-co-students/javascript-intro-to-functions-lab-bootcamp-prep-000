var shout = (string) => {
  return string.toUpperCase();
}

var whisper = (string) => {
  return string.toLowerCase();
}

var logShout = (string) => {
  console.log(string.toUpperCase());
}

var logWhisper = (string) => {
  console.log(string.toLowerCase());
}

var sayHiToGrandma = (string) => {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }

}
