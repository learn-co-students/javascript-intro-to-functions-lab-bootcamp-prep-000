function shout(str) {
  return str.toUpperCase()
}

function whisper(str) {
  return str.toLowerCase()
}

function logShout(str) {
  console.log(str.toUpperCase())
}

function logWhisper(str) {
  console.log(str.toLowerCase())
}

function sayHiToGrandma(str) {
  switch(true) {
    case (str === str.toLowerCase()):
     return "I can't hear you!";
     break;
    case (str === str.toUpperCase()):
     return "YES INDEED!"
     break;
    case (str === "I love you, Grandma."):
     return "I love you, too.";
     break;
  }
}
