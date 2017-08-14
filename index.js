function shout(string){
  return string.toUpperCase() // return uppercase version of the string
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var upperCase = string.toUpperCase()
  var lowerCase = string.toLowerCase()
  if (string === lowerCase){
    return "I can't hear you!"
  }
  else if (string === upperCase){
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
