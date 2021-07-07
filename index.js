function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO"); string.toUpperCase()
}

function logWhisper(string) {
  console.log("hello"); string.toLowerCase()
}
/*
  var lowercase ="hello!"
  lowercase.toLowerCase() === lowercase
  var uppercase= "HELLO!"
  uppercase.toUpperCase() === uppercase
  var mixedCase= "I love you, Grandma."
  mixedCase.toLowerCase()=== mixedCase
  mixedCase.toUpperCase()=== mixedCase
  */
 
function sayHiToGrandma(string) {
  if (string === string.toLowerCase() )
   return ("I can't hear you!")
  else if (string === string.toUpperCase() )
  return ("YES INDEED!")
  else (string === "I love you, Grandma.")
  return ("I love you, too.")
  
  }
