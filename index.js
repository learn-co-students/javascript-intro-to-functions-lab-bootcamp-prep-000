function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function logShout(string) {
  console.log(string.toUpperCase())
}

 
  
function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedCase = "Hi there"
  if (string === lowercase) {
    return "I can\'t hear you!";
  } if (string === uppercase) {
    return "YES INDEED!";
  } if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}

shout("Hello")
whisper("Hello");
logShout("Hello");
logWhisper("Hello");
sayHiToGrandma("hello")