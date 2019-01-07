function shout(st){
var s = st.toUpperCase()
return s
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  return console.log(string.toUpperCase())
}

function logWhisper(string){
  return console.log(string.toLowerCase())
}

function sayHiToGrandma (string){
  if ( string === "I love you, Grandma."){
    return "I love you, too."
  }
  else if (string.toUpperCase() == string){
  return "YES INDEED!"
  }
  else if (string.toLowerCase() == string) {
    return "I can\'t hear you!"
  }
}
