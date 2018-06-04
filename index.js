function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log("HELLO")
}

function logWhisper(string){
  console.log("hello")
}

function sayHiToGrandma(string){
  
  if(string === string.toLowerCase){
    console.log("I can't hear you!")
  }
  if(string ===string.toUpperCase){
    console.log("YES INDEED!")
  }
  if(string === "I love you, Grandma."){
    console.log("I love you, too.")
  }
  
}