function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  const spy = string.toUpperCase();
  console.log(spy);
}

function logWhisper(string){
  const spy = string.toLowerCase();
  console.log(spy);
}

function sayHiToGrandma(string){
  var upperCase = string.toUpperCase()
  var lowerCase = string.toLowerCase()
  
  if(string === upperCase){
    return "YES INDEED!"
  }else if(string === lowerCase){
    return "I can\'t hear you!"
  }else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}