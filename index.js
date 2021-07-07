function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function whisper(string) {
  return string.toLowerCase();
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  let lowerCase = string.toLowerCase();
  let upperCase = string.toUpperCase();
  
  if (string === lowerCase) {
    return "I can't hear you!";
  }
  
  if (string === upperCase) {
    return "YES INDEED!";
  }
  
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}

