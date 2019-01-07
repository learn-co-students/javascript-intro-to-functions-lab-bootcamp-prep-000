function shout(pstring) {
  return pstring.toUpperCase()
}

function whisper(pstring) {
  return pstring.toLowerCase()
}

function logShout(pstring){
  console.log(pstring.toUpperCase())
}

function logWhisper(pstring){
 console.log( pstring.toLowerCase())
}

function sayHiToGrandma(pstring) {

  if (pstring.toUpperCase() === "I love you, Grandma.".toUpperCase())
    return ("I love you, too.")
  else if ( pstring === pstring.toLowerCase() )
    return "I can't hear you!"
  else if (pstring === pstring.toUpperCase())
    return "YES INDEED!"
  else return ("Mixture case")  
   
}
