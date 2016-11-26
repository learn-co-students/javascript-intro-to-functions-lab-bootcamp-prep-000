function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var testLower = string.toLowerCase();
  var testUpper = string.toUpperCase();
  var greeting = "I love you, Grandma.";
  if(testLower === string)
    return "I can't hear you!";
  else if(testUpper === string) {
    return "YES INDEED!";
  } else if(greeting === string) {
    return "I love you, too.";
  }
}
