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
var cant = "I can't hear you!";
var indeed = "YES INDEED!";
var love = "I love you, too.";
if(string.toLowerCase() === string) {
  return cant;
}
else if(string.toUpperCase() === string) {
return indeed;
}
else if("I love you, Grandma." === string) {
return love;
}
}