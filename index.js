function shout(string){
  return string.toUpperCase();
}

var uppercase= "HELLO!";

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
console.log('HELLO'); string.toUpperCase();
}

function logWhisper(string){
console.log('hello'); string.toLowerCase();
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string.toUpperCase() === string) {
  return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}