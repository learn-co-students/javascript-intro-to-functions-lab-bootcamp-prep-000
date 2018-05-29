function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  return string.toUpperCase;
}
var hello = 'HELLO'
  console.log(logShout('hello'));

var logShout = 'HELLO'
function logShout(string) {
  return string.toUpperCase('hello')
}
console.log(logShout('hello'));
// expected output: HELLO

function logWhisper(string) {
  return string.toLowerCase()
}
var logWhisper = 'hello'
console.log(logWhisper())

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {return "I love you, too.";  }
  else if (string === "HELLO") {return "YES INDEED!";}
  else if (string === "hello") {return "I can't hear you!"; }
  else {
    return ("arent you sweet")
  }
}
