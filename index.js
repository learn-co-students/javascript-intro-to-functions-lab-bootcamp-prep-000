function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}



function logShout(string) {
  if (string === string.toUpperCase()) {
    console.log(shout(string));
  }
}

var lowercase = 'hello!'

function logWhisper(string) {
  if (lowercase.toLowerCase() === lowercase) {
    console.log(string);
  }
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
