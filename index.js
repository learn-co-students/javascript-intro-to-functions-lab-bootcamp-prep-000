var shout = function(string) {
  return string.toUpperCase()
}


var whisper = function(string) {
  return string.toLowerCase();
}

var logShout = function(string) {
  console.log(string.toUpperCase());
}

var logWhisper = function(string) {
  console.log(string.toLowerCase());
}

var sayHiToGrandma = function(string) {
  if(string === string.toLowerCase()) {
    return "I can't hear you!";
  }

  else if(string === string.toUpperCase()) {
    return "YES INDEED!";
  }

  else if(string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
