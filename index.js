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
  if (string === string.toLowerCase()) { 
  var lowercase = "hello!"; 
  lowercase.toLowerCase() === lowercase;
  return ('I can\'t hear you!');
  } 
  else if (string === string.toUpperCase()) {
  var uppercase = "HELLO!"; 
  uppercase.toUpperCase() === uppercase; 
  return('YES INDEED!');
  } else {
  var mixedCase =  "I love you, Grandma.";
  mixedCase.toLowerCase() === mixedCase;
  mixedCase.toUpperCase() === mixedCase;
  return ('I love you, too.');
  }
  }
