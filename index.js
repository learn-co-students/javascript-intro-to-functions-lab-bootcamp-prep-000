var shout = function(str) {
  str = str.toUpperCase();
  return str;
}

var whisper = function(str) {
  str = str.toLowerCase();
  return str;
}

var logShout = function(str) {
  str = str.toUpperCase();
  console.log(str);
}

var logWhisper = function(str) {
  str = str.toLowerCase();
  console.log(str);
}

var sayHiToGrandma = function(str) {
  var smallStr = str.toLowerCase();
  var bigStr = str.toUpperCase();
  if(str === "I love you, Grandma.") {
    return "I love you, too.";
  } else if(str === smallStr) {
    return "I can't hear you!";
  } else if (str === bigStr) {
    return "YES INDEED!";
  }
}

shout('hello');
whisper('GoodBye');
logShout('Hello, World');
logWhisper('Goodnight Moon');
sayHiToGrandma('I love you, Grandma.');
