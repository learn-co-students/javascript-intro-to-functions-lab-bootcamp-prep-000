function shout(string){
  return string.toUpperCase()
}
shout('hello');

function logShout(string){
  return console.log(string.toUpperCase())
}
logShout('hello')

function whisper(string){
  return string.toLowerCase()
}
whisper('HELLO')
function logWhisper(string){
  return console.log(string.toLowerCase())
}
logWhisper('HELLO')
function sayHiToGrandma(string){
  if(string === string.toLowerCase()) return "I can't hear you!";
  if(string === "I love you, Grandma.") return "I love you, too.";
  if(string === string.toUpperCase()) return "YES INDEED!";
}
