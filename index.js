function shout(str){
  return str.toUpperCase() //Upper Case
}
function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  console.log(str.toUpperCase())

}

function logWhisper(str){
  console.log(str.toLowerCase())
}

function sayHiToGrandma(stri){
  if(stri==="I love you, Grandma.") return "I love you, too."
  if(stri===stri.toUpperCase()) return "YES INDEED!"
  if(stri===stri.toLowerCase()) return "I can't hear you!"
}
