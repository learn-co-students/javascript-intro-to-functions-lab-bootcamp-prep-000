function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma (string) {
  var shoutresponse = "YES INDEED!";
  var whisperresponse = "I can\'t hear you!";
  var loveresponse = "I love you, too.";
  
  if (string.toUpperCase(string) === string) {
    return shoutresponse;
  }
  else if (string.toLowerCase(string) === string) {
    return whisperresponse;
  }
  else if ("I love you, Grandma." === string) {
    return loveresponse;
  }
}

  