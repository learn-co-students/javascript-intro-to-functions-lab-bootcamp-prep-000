function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  console.log(shout(string))
}
function logWhisper(s){
  console.log(whisper(s))
}
function sayHiToGrandma(s){
  if (s === "I love you, Grandma."){
      return "I love you, too."
  }
  if (s === shout(s)){

    return "YES INDEED!"
  }
  return "I can't hear you!"
}