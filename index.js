var shout = function(string) {
  return string.toUpperCase();
}

var whisper = function(string) {
  return string.toLowerCase();
}

var logShout = function(string) {
  var n = string.toUpperCase();
  console.log(n);
}

var logWhisper = function(string) {
  var n = string.toLowerCase();
  console.log(n);
}

var sayHiToGrandma = function(string) {
  var l = string.toLowerCase();
  if(l === string) {
    return "I can't hear you!";
  }
  var u = string.toUpperCase();
  if(u === string) {
    return "YES INDEED!";
  }
  var c = "I love you, Grandma."
  if (c === string) {
    return "I love you, too.";
  }

}
