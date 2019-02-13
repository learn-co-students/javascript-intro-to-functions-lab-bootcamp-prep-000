function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(greeting) {
  
  if(greeting.toLowerCase() === greeting){
    return "I can't hear you!"
  }else if(greeting.toUpperCase() === greeting){
    return 'YES INDEED!'
  }else{
    return "I love you, too."
  }
}

