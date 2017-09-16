function shout(param) {
  return param.toUpperCase();
}

function whisper(param) {
  return param.toLowerCase();
}

function logShout(param) {
  console.log(shout(param));
}

function logWhisper(param) {
  console.log(whisper(param));
}

function sayHiToGrandma(msg) {
  if (msg == msg.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (msg == msg.toUpperCase()) {
    return "YES INDEED!";
  } else if (msg == "I love you, Grandma.") {
    return "I love you, too.";
  }
}
