function shout(message) {
  return message.toUpperCase();
}

function whisper(message) {
  return message.toLowerCase();
}

function logShout(message) {
  console.log(message.toUpperCase());
}

function logWhisper(message) {
  console.log(message.toLowerCase());
}

function sayHiToGrandma(message) {
  if (message === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (message === message.toLowerCase()) {
    return "I can't hear you!";
  } else if (message === message.toUpperCase()) {
    return "YES INDEED!";
  }
}

