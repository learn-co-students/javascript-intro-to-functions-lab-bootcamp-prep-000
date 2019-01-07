function shout(msg){
  return msg.toUpperCase()
}

function whisper(msg){
  return msg.toLowerCase()
}

function logShout(msg){
  console.log(shout(msg))
}

function logWhisper(msg){
  console.log(whisper(msg))
}

function sayHiToGrandma(msg){
  if (msg.toLowerCase() === msg){
    return ("I can't hear you!")
  } else if (msg.toUpperCase() === msg){
    return ("YES INDEED!")
  } else if (msg === "I love you, Grandma."){
    return ("I love you, too.")
  }
}
