function shout(string) {
  let shoutedString = string.toUpperCase();
  return shoutedString
}
shout('hello');


function whisper(string) {
  let whisperedString = string.toLowerCase();
  return whisperedString
}
whisper('HELLO');


function logShout(string) {
  console.log(string.toUpperCase());
}
logShout('hello');

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logShout('HELLO');

function sayHiToGrandma(string) {
  if (string === "hello")
  return "I can\'t hear you!";
  
  if (string === "HELLO")
  return "YES INDEED!";
  
  if (string === "I love you, Grandma");
  return "I love you, too."
  
}
sayHiToGrandma('hello');

