function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  
  var uppercase = string;
  if(string === uppercase.toUpperCase())
  {
    return "YES INDEED!"
  }
  
  var lowercase = string;
  if(string === lowercase.toLowerCase())
  {
    return "I can't hear you!"
  }
  
  if(string === "I love you, Grandma.")
  {
    return "I love you, too."
  }
}