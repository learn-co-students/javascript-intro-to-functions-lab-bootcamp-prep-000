function shout (string) {
return string.toUpperCase(); // HELLO! 
}

function whisper (string) {
return string.toLowerCase();
}


function logShout (string) {
  console.log (string.toUpperCase());
}

logShout();

function logWhisper (string) {
  console.log (string.toLowerCase());
}
logShout();

function sayHiToGrandma (string) {
  if (string === string.toLowerCase()) {
  return 'I can\'t hear you!'
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  
}
