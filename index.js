function shout(string){
  return string.toUpperCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  if (string==='I love you, Grandma.'){
      return "I love you, too."
  }
  if (string===string.toUpperCase()){
    return "YES INDEED!"
  }
}
function whisper(string){
  return string.toLowerCase()
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
