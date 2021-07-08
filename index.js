// Shout Function
function shout(string){
  return string.toUpperCase()
}

// Whisper function
function whisper(string){
  return string.toLowerCase()
}

// LogShout function
function logShout(string){
  console.log(string.toUpperCase())
  
}

//LogWhisper function
function logWhisper(string){
  console.log(string.toLowerCase())
}

// 'sayHiToGrandma function
function sayHiToGrandma(string){
  if(string == string.toLowerCase()){
    return "I can\'t hear you!"
  } else if(string == string.toUpperCase()) {
    return  "YES INDEED!"
  } else if(string == "I love you, Grandma.") {
    return "I love you, too."
  }
}

