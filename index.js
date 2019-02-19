var string = "HELLO";
function shout(string){
 return string.toUpperCase();
}

var string = "hello"
function whisper(string){
  return string.toLowerCase();
}


function logShout(string){
  console.log(string.toUpperCase())
}

string = "HELLO"
function logWhisper(string){
  console.log(string.toLowerCase())
}



function sayHiToGrandma(string){
  if (string === string.toLowerCase()) 
  return "I can't hear you!";
  else if (string === "I love you, Grandma.")
  return "I love you, too.";
  else if (string === string.toUpperCase())
  return "YES INDEED!";
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");