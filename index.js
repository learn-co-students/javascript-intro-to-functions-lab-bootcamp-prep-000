
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

shout("hello")
function logShout(string) {
  return console.log(string.toUpperCase())
}

whisper("hello")
function logWhisper(string) {
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
if (string === string.toLowerCase())
return "I can't hear you!";
else if (string === string.toUpperCase()) return "YES INDEED!";
else if (string === "I love you, Grandma.") 
return "I love you, too.";
}
