function shout (string) {
  return string.toUpperCase() //'HELLO!'
}
shout("hello");

function whisper (string) {
  return string.toLowerCase() //'hello!'
}
whisper("HELLO");

function logShout (string) {
  console.log('HELLO');
}
logShout("hello");

function logWhisper (string) {
  console.log('hello');
}
logWhisper("HELLO");

function sayHiToGrandma (string) {
  if (string === string.toLowerCase())
  return "I can\'t hear you!";

  else if (string === string.toUpperCase()) 
  return "YES INDEED!";

  else (string === "I love you, Grandma.")
  return "I love you, too.";
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I loue you, Grandma");












