function shout(text){
  return text.toUpperCase();
}

function whisper(text){
  return text.toLowerCase();
}

function logShout(text){
  console.log(text.toUpperCase());
}

function logWhisper(text){
  console.log(text.toLowerCase());
}

function sayHiToGrandma(text){
  switch(text){
    case text.toLowerCase():
      return "I can't hear you!";
    case text.toUpperCase():
      return "YES INDEED!"
    case "I love you, Grandma.":
      return "I love you, too."
  }
}
