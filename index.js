
function shout(string) {
  return string.toUpperCase()
}
shout("Hello!")

function whisper(string){
  return string.toLowerCase()
}
whisper("HELLO!")

function logShout(string){
  console.log(string.toUpperCase());
}
logShout("Hello!")  

function logWhisper(string){
  console.log(string.toLowerCase());
}
logWhisper("HELLO!")

function sayHiToGrandma(string){
  var lowerCase = string.toLowerCase
  var upperCase = string.toUpperCase
  
  if (string.toLowerCase() === string){
    return `I can't hear you!`
  }
  else if (string.toUpperCase() === string){
    return `YES INDEED!`
  }
  else if (string === "I love you, Grandma."){
    return `I love you, too.`
  }
}  
  
sayHiToGrandma("HELLO")
