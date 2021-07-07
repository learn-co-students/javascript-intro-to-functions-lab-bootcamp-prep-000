function shout(bob) {
  return bob.toUpperCase();
}

function whisper(varName) {
  return varName.toLowerCase();
}

function logShout(string) {
  const uppercaseString = shout(string); 
  console.log(uppercaseString);
}

function logWhisper(string) {
  const lowercaseString = whisper(string);
  console.log(lowercaseString);
}

function sayHiToGrandma(string) {
  const lowercaseString = whisper(string);
  const uppercaseString = shout(string);
  
  if(string === lowercaseString) {
    return "I can\'t hear you!";
  } else if (string === uppercaseString) {
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}