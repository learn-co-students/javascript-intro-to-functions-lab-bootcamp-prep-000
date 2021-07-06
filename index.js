function shout(string) {
  return string.toUpperCase()
}
'Hello!'.toUpperCase() // 'HELLO!'
'HELLO'.toLowerCase() // 'hello!'

// function sayHiToGrandma(string){
//   if(string === "I love you, Grandma."){
//     return "I love you, too."
//   }
// }
  
function sayHiToGrandma(string){ 
  if(string.toLowerCase() === string) { //checks to see if string is lowercase//
    return "I can't hear you!" //if it is lowercase, returns this
  } else if(string === "I love you, Grandma."){ //if string isn't lowercase, checks to see if string is 'I love you, Grandma.'
    return "I love you, too." //if it is, returns this
   } else if(string.toUpperCase() === string)
    return "YES INDEED!"
}
  

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper (string) {
  console.log(string.toLowerCase())
}

function shout(string) {
  return string.toUpperCase()
}

function logShout (string) {
  console.log(string.toUpperCase())
}

