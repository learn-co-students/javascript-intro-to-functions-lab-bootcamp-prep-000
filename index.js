function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  var toLogShout = string.toUpperCase();
  console.log(toLogShout);
}
function logWhisper(string) {
  var toLogWhisper = string.toLowerCase();
  console.log(toLogWhisper);
}
function sayHiToGrandma(string) {
  var origString = string;
  var lcString = string.toLowerCase();
  if (origString === lcString) {
    return("I can\'t hear you!");
  }
  else if (origString === "I love you, Grandma."){
    return("I love you, too.");
  }
  else {
    return("YES INDEED!");
  }
}
