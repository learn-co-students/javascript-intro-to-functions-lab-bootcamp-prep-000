function shout(speech){
  return speech.toUpperCase()
}

function whisper(speech){
  return speech.toLowerCase()
}

function logShout(speech){
  console.log(speech.toUpperCase())
}

function logWhisper(speech){
  console.log(speech.toLowerCase())
}

function sayHiToGrandma(speech){
  if(speech === speech.toLowerCase()){
    return "I can't hear you!"
  } else if(speech === speech.toUpperCase()){
    return "YES INDEED!"
  } else if(speech === "I love you, Grandma."){
    return "I love you, too."
  }
}