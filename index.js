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

function sayHiToGrandma(hello){
  if(hello.toLowerCase()===hello){
    return "I can't hear you!"
  }else if (hello.toUpperCase()===hello){
    return "YES INDEED!"
  }else if (hello==="I love you, Grandma."){
    return "I love you, too."
  }
}