function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var result = "I can\'t hear you!";
  var result2 = "YES INDEED!";
  var result3 = "I love you, too.";
  if (string.toLowerCase() === string) {
    return result;
  }
  else if (string.toUpperCase() === string){
    return result2;
  }
  else if (string === "I love you, Grandma."){
    return result3;
  }
}
