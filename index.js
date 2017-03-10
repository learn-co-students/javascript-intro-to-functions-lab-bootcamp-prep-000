function shout(string) {
  return(string.toUpperCase());
}

function whisper(string) {
  return (string.toLowerCase());
}

function logShout(string) {
  console.log(string.toUpperCase());

}

function logWhisper(string) {
  console.log(string.toLowerCase());

}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return ("I can't hear you!");
  } else if (string.toUpperCase() === string) {
    return ("YES INDEED!");
  } else {
    string = string.toLowerCase();
    var str = "I love you, Grandma.";
    if (string === str.toLowerCase()) {
      return ("I love you, too.");
    }
  }
}
