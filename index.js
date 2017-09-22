upperCase = "Hello"
lowerCase = "hello"



function shout(string){
  return string.toUpperCase() === upperCase // All Caps
}


function whisper(string){
  return string.toLowerCase() === lowerCase
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}


function sayHiToGrandma(string){
  if (string === lowerCase) {
    return ("I can't hear you!");
  } else if (string === upperCase) {
    return ("YES INDEED!");
  } else (string === "I love you, Grandma."){
    return ("I love you, too.");
  }
