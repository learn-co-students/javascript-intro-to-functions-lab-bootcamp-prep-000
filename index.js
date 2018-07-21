function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log("hello".toUpperCase())
}

function logWhisper(string){
  console.log("HELLO".toLowerCase())
}


function sayHiToGrandma(string){
  if("hello".toLowerCase() ==="hello") {
    return("I can't hear you!")
  }
  if("HELLO".toUpperCase()==="HELLO"){
    return("YES INDEED!")
  }
  if("I love you, Grandma" === "I love you, Grandma"){
  return("I love you, too.")
  }
}
