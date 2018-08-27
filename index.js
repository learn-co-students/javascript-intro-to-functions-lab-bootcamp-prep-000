function shout(thing){return thing.toUpperCase()}

function whisper(thing){return thing.toLowerCase()}

function logShout(thing){console.log(thing.toUpperCase())}

function logWhisper(thing){console.log(thing.toLowerCase())}

function sayHiToGrandma(thing){
  if(thing === thing.toLowerCase()){
    return "I can't hear you!"
  }
  else if(thing === thing.toUpperCase()){
    return "YES INDEED!"
  }
  else if(thing === "I love you, Grandma."){
    return "I love you, too."
  }
}