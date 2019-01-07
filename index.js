function shout(text){
  return text.toUpperCase()
}

function whisper(text){
  return text.toLowerCase()
}

function logShout(text1){
  text1 = text1.toUpperCase()
  console.log(`${text1}`)
  
}


function logWhisper(text1){
  text1 = text1.toLowerCase()
  console.log(`${text1}`)
  
}

function sayHiToGrandma(text){
  if(text.toLowerCase() === text) {
    return "I can't hear you!"
  }
  else if(text.toUpperCase() === text) {
    return "YES INDEED!"
  }
 else if(text === 
  "I love you, Grandma.") {
    return "I love you, too."
  }
}