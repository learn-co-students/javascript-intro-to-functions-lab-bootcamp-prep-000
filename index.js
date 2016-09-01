function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function whisper(string){
  return string.toLowerCase();
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var upperCase = string.toUpperCase();
  var lowerCase = string.toLowerCase();

  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (string == upperCase) {
    return "YES INDEED!";    
  } else if (string == lowerCase) {
    return 'I can\'t hear you!';
  }
}
