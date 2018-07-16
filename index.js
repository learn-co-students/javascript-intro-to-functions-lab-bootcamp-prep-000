function shout(string) {
  return string.toUpperCase(); //returns its one argument in all lowercase
}

function whisper(string) {
  return string.toLowerCase(); //returns its one argument in all caps
}

function logShout(string) {
  console.log(string.toUpperCase()); //logs its one argument in all caps
}

function logWhisper(string) {
  console.log(string.toLowerCase()); //logs its one argument in all lowercase
}

function sayHiToGrandma(string) {
  if (string ===  string.toLowerCase()) {
    return "I can't hear you!";
  }
  
  else if (string ===  string.toUpperCase()) {
    return "YES INDEED!";
  }
  
  else {
    return "I love you, too.";
  }
}