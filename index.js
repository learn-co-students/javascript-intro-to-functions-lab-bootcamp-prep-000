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

function sayHiToGrandma(name) {
  if (name.toLowerCase() === name) {
    return "I can\'t hear you!"
  }
  else {
    return name;
  }
}
function sayHiToGrandma(name) {
  if (name.toUpperCase() === name) {
    return "YES INDEED!"
  }else {
    return name;
  }
}

function sayHiToGrandma(text) {
  if (text === "I love you, Grandma.") {
    return "I love you, too."
  }
}
