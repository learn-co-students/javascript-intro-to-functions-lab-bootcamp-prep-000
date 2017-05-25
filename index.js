function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var yesIndeed = "YES INDEED!";
  var cantHear = "I can't hear you!"
  var love = "I love you, too."
  if (string === string.toUpperCase()) {
    return yesIndeed;
  }
  else if (string === string.toLowerCase()) {
    return cantHear;
  }
  else if (string == "I love you, Grandma.") {
    return love;
  }
}
