function shout(text) {
  return text.toUpperCase()
}

function whisper(text) {
  return text.toLowerCase();
}

function logShout(text) {
  console.log(text.toUpperCase());
}

function logWhisper(text) {
  console.log(text.toLowerCase());
}

function sayHiToGrandma(text) {
  if (text.toLowerCase() === text)
  {
    return "I can't hear you!";
  }
  else if (text.toUpperCase() === text)
  {
    return "YES INDEED!";
  }
  else if (text === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}