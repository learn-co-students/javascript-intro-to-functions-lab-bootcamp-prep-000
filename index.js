function shout (string) {
return string.toUpperCase()
}

function whisper (string){
  return string.toLowerCase()
}

function logShout(string){
  console.log( string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

logShout("HELLO")

logWhisper("hello")

function sayHiToGrandma(string){
  if (string.toUpperCase()==="I LOVE YOU, GRANDMA."){
    return "I love you, too."
  }
  else if (string.toUpperCase()=== string){
    return "YES INDEED!"
  } else  {
    return "I can't hear you!"
  }
}
