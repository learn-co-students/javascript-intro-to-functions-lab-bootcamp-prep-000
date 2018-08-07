function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  let lowercase = string.toLowerCase();
  let uppercase = string.toUpperCase();
  
  if(string === "I love you, Grandma.")
    return("I love you, too.")
  
  if (string === lowercase)
    return ("I can't hear you!")
  else if (string === uppercase)
   return("YES INDEED!")
}