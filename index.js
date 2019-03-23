function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}

function logShout (string){
  console.log(string.toUpperCase())
}

function logWhisper (string){
  console.log (string.toLowerCase ())
}
function sayHiToGrandma (string){
  var uppercase
  var lowercase
  var mixedcase
  uppercase=string.toUpperCase()
  if (uppercase===string)
  return ("YES INDEED!")
  lowercase=string.toLowerCase()
  if (lowercase===string)
  return ("I can't hear you!")
  mixedcase=string
  if (mixedcase==="I love you, Grandma.")
    return ("I love you, too.")
  }