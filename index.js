function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  shout = string.toUpperCase();
  console.log(shout);
}

function logWhisper(string) {
  whisper = string.toLowerCase();
  console.log(whisper);
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }

  else if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  else {
    return "YES INDEED!"
  }
}
