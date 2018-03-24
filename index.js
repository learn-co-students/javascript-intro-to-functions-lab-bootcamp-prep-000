
function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){

var caseStr = string;
var grandmaStr = string;

if (caseStr.toLowerCase() === caseStr) {
  return `I can't hear you!`;
}
else if(caseStr.toUpperCase() === caseStr) {
  return "YES INDEED!";
}
else {
  return "I love you, too.";
}
}



