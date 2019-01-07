// 1 function shout
function shout(string){
  return string.toUpperCase()
}
// 2 function wishper
function whisper(string){
  return string.toLowerCase()
}
// 3 function logShort
function logShout(string){
  var uppercase = string.toUpperCase()
    if (uppercase.toUpperCase() === uppercase){
    console.log(uppercase)
  }
}
// 4 function logWishper
 function logWhisper(string){
   var lowercase = string.toLowerCase()
    if (lowercase.toLowerCase() === lowercase){
     console.log(lowercase)
   }
 }

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can\'t hear you!"
  }
  else if(string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}
