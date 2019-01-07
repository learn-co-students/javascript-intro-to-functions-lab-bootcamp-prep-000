function shout(string) {
return string.toUpperCase()
};

shout("hello");

function logShout(string) {
  return console.log(string.toUpperCase())
}

logShout ("hello");

function whisper(string) {
  return string.toLowerCase();
}

whisper("HELLO");

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

logWhisper("HELLO")


function sayHiToGrandma(string) {
  if (string.toLowerCase() === string)
  { return "I can\'t hear you!" }
  if (string.toUpperCase() === string)
  { return "YES INDEED!" }
  if (string === "I love you, Grandma.")
  { return "I love you, too." }
}

sayHiToGrandma( "hello" );
sayHiToGrandma( "HELLO" );
sayHiToGrandma( "I love you, Grandma." )
