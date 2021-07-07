var grandmaShout = "YES INDEED!"
var grandmaWhisper = "I can't hear you!"
var grandmaLoveOne = "I love you, Grandma."
var grandmaLoveTwo = "I love you, too."
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
  if(string === string.toUpperCase()){
    return grandmaShout
  }
  if(string === string.toLowerCase()){
    return grandmaWhisper
  }
  if(string === grandmaLoveOne){
    return grandmaLoveTwo
  }
}