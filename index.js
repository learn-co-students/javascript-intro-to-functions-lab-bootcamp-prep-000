function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
var lowerString = whisper(string);
var upperString = shout(string);

if(string === lowerString){
  return "I can't hear you!";
}

if(string === upperString){
  return "YES INDEED!";
}

if(string === "I love you, Grandma."){
  return "I love you, too.";
}
}
