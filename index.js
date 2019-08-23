function shout(name) {
  return name.toUpperCase();
}

function whisper(name) {
  return name.toLowerCase();
}

function logShout(name) {
  console.log(name.toUpperCase());
}

function logWhisper(name) {
  console.log(name.toLowerCase());
}

function sayHiToGrandma(textt) {
  if (textt.toLowerCase() === textt) {
    return "I can't hear you!";
  }
  else {
    return textt + "test";
  }
}
function sayHiToGrandma(texttt) {
  if (texttt.toUpperCase() === texttt) {
    return "YES INDEED!";
  }else {
    return texttt + "test";
  }
}

function sayHiToGrandma(text) {
  if (text === "I love you, Grandma.") {
    return "I love you, too."
  }
}
