function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logOut(string) {
  console.log(string.toUpperCase());
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string.toUpperCase() === string){
      return "YES INDEED!";
  } else if(string.toLowerCase() === string){
    return "I can\'t hear you!";
  } else {
    return "I love you, too.";
  }
}
