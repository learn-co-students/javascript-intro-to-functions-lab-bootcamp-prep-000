// function shout() {
// //  return string.toUpperCase()
// }
//
//
// //function whisper("Hello") {
//
// }
//
//
//
 function logShout(string = "hello") {
 console.log(string.toUpperCase())
 }

function shout(string = "shout"){
  return string.toUpperCase()
}

function whisper(string)
{ return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if(string === "I love you, Grandma."){return "I love you, too."}
 else if(string === "hello"){return "I can't hear you!"}
 else {return "YES INDEED!"}}
