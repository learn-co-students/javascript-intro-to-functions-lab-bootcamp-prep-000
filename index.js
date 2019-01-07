function shout(string){
  return string.toUpperCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function whisper(string){
  return string.toLowerCase()
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  if(string ==="HELLO"){
    string="YES INDEED!"
    return string
  }else if(string ==="hello"){
    string="I can't hear you!"
    return string
  }else if(string ==="I love you, Grandma."){
  string = "I love you, too." 
  return string
  }
}