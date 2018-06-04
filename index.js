function shout(szShout) {
  return szShout.toUpperCase();
}

function whisper(szWhisper) {
  return szWhisper.toLowerCase();
}

function logShout(szShout) {
  console.log(szShout.toUpperCase());
  return null;
}

function logWhisper(szWhisper) {
  console.log(szWhisper.toLowerCase());
  return null;
}

function sayHiToGrandma(szMsg) {
  switch (szMsg) {
    case szMsg.toLowerCase():
      return "I can't hear you!";
      break;
    case szMsg.toUpperCase():
      return "YES INDEED!";
      break;
    case "I love you, Grandma.":
      return "I love you, too."
      break;
  }
}
