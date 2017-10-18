function shout(string){
  return string.toUpperCase()
}

function whisper(s){
  return s.toLowerCase()
}

function logWhisper(s){
  console.log(s.toLowerCase())
}

function logShout(s){
  console.log(s.toUpperCase())
}

function sayHiToGrandma(s){
  if(s == "I love you, Grandma.") {
    return "I love you, too."
  }
  if(s == s.toUpperCase()){
     return "YES INDEED!"
  }else{
    return "I can't hear you!"
  }
}
