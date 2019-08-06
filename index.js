var uppercase = "HELLO!"
var lowercase = "hello!"

string.toUpperCase() === uppercase
string.toLowerCase() === lowercase



function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
if (string.toLowerCase()===string){
  return "Speak up, dear!"} 
if (string.toUpperCase()===string){
  return "YES INDEEDY!"}
if (string === "I love you, Grandma."){
  return "I love you, too."}
}


