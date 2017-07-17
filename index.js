

var holder;
 function sayHiToGrandma(string)
 { if(string === string.toLowerCase())
   {
  holder = "I can't hear you!" }
  else if (string === string.toUpperCase() ){
    holder = "YES INDEED!"
 }
 else if (string === "I love you, Grandma."){
   holder = "I love you, too."} return holder; }

function logWhisper(string) {
console.log(string.toLowerCase())
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function whisper(string) {
  return string = string.toLowerCase()
}

function shout(string) {
  return string = string.toUpperCase()
}
