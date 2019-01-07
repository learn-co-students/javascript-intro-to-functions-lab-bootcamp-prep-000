var shout = function (string) {
  return string.toUpperCase();
}

var whisper = function (string) {
  return string.toLowerCase();
}

var logShout = (string) => {
  console.log(shout(string));
}

var logWhisper = (string) => {
  console.log(whisper(string));
}

function sayHiToGrandma (string) {
  if(string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  else if (string === shout(string)) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
