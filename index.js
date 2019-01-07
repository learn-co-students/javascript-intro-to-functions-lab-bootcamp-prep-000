function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  var og = string
  if(og = "I love you, Grandma."){
    return "I love you, too."
  }
  elseif (og === string.toLowerCase()){
    return "I can't hear you!"
  }
  elseif(og === string.toUpperCase()){
    return "YES INDEED!"
  }
}
