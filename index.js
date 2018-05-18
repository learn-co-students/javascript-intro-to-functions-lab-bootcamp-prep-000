var uppercase = "HELLO"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase("HELLO");
}

function logShout(string) {
  console.log(string.toUpperCase("hello"));
}

function logWhisper(string) {
  console.log(string.toLowerCase("hello"));
}

function sayHiToGrandma(string) {
  if (string === lowercase.toLowerCase()) {
    return 'I can\'t hear you!'
  } else if (string === uppercase.toUpperCase()) {
      return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");
