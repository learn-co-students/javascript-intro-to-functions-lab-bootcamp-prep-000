
function shout(string){
  return string.toUpperCase()
}
function whisper(string='hello'){
  return string.toLowerCase()
}
function logWhisper(spy='hello'){
  console.log(spy.toLowerCase())
}
function logShout(spy='HELLO'){
 console.log(spy.toUpperCase())

}
function sayHiToGrandma(string){
if(string.toLowerCase() === string){
    return "I can't hear you!"
}
if (string.toUpperCase()=== string) {
  return "YES INDEED!"
}
if (string === "I love you, Grandma.") {
  return "I love you, too."
}

}
