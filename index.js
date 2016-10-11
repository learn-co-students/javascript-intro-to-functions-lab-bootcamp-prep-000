function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  console.log(shout(str))
}

function logWhisper(str){
  console.log(whisper(str))
}

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can\'t hear you!"
  }

  if(string === string.toUpperCase()){
    return "YES INDEED!"
  }

  if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}
