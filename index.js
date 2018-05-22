function shout(word){
  return word.toUpperCase()
}
function whisper(word){
  return word.toLowerCase()
}
function logShout(word){
  console.log(word.toUpperCase())
}
function logWhisper(word){
  console.log(word.toLowerCase())
}
function sayHiToGrandma(word){
  var lowercase = word.toLowerCase()
  var uppercase = word.toUpperCase()
  if(word===lowercase && word === "hello"){
    return "I can\'t hear you!"
  }
  else if(word === "HELLO" && word === uppercase){
    return "YES INDEED!"
  }
  else if(word === "I love you, Grandma."){
   return "I love you, too."
  }
}