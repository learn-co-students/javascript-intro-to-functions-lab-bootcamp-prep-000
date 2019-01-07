function shout(string) {
return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase()) //calling the string through the console.log() command, but making it uppercase instead of just calling it
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toUpperCase() === string){
    return "YES INDEED!"}
  else if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
  
  }