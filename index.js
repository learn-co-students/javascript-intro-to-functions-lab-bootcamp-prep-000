function shout(string) {
  return string.toUpperCase()
}

//whisper
function whisper(string) {
  return string.toLowerCase()
}

//logShout
function logShout(string) {
  console.log(string.toUpperCase())
}

//logWhisper
function logWhisper(string) {
  console.log(string.toLowerCase())
}

//grandma
function sayHiToGrandma(string) {
  if(string === "HELLO"){
    return "YES INDEED!"
  }
  
  if(string === "hello") {
    return "I can\'t hear you!"
  }
  
  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}