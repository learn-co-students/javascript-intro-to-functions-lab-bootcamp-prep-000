function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  switch(string) {
    case string.toLowerCase():
      return "I can't hear you!";
      break;
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case "I love you, Grandma.":
      return "I love you, too.";
      break;
  }
}
