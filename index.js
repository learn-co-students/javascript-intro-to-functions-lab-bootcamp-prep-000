function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logWhisper(string){
  console.log("hello")
}
function logShout(string){
  console.log("HELLO")
}
function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return "I love you, too."
  } else if (string == shout(string)){
    return "YES INDEED!"
  } else if (string == whisper(string)){
    return "I can't hear you!"
  }
}