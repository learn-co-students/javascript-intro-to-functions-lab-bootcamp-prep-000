function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    //says that if the string is lower case, then do <blank>
    return "I can\'t hear you!";
    //remember to escpae " ' "
  } else if (string.toUpperCase() === string) {
    //if the string is === to being uppercase then do <blank>
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    //if the string matches then do <blank>
    return "I love you, too.";
  }
}
