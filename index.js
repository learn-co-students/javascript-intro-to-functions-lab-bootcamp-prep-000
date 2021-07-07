function shout(string) {
  return string.toUpperCase()
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
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  var ily = "I love you, Grandma."
  
  if (string===lowercase){
    return "I can't hear you!"
  }
  else if (string===uppercase){
    return "YES INDEED!"
  }
  else if(string===ily){
    return "I love you, too."
  }
}