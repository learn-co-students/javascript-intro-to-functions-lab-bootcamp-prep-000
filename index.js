/* Converts string to UpperCase and returns it*/
function shout (string){
  return string.toUpperCase()
}

/* Converts string to LowerCase and returns it*/
function whisper(string){
  return string.toLowerCase()
}

/* Converts string to UpperCase and console.log it*/
function logShout(string){
  console.log(string.toUpperCase())
}

/*converts string to lowerCase and console.log it */
function logWhisper(string){
  console.log(string.toLowerCase())
}

/* Returns different responses based on string passed on function */
function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
  else {
    return "Yes, honey pie!"
  }
}
