function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
/*function spy(string){

 return spy('HELLO!')
}*/
function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}
 
 function sayHiToGrandma(string){
 
  if( string === 'hello') {
    return "I can't hear you!"
  }
  else if(string === 'HELLO'){
    return "YES INDEED!"
  }
  else if(string === 'I love you, Grandma.'){
    return "I love you, too."
  }
 }