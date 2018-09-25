const shout = function (string){
  return string.toUpperCase();
};

const whisper = function (string){
  return string.toLowerCase();
};

const logShout = function (string) {
  console.log(string.toUpperCase());
};

const logWhisper = function (string) {
  console.log(string.toLowerCase());
};

const sayHiToGrandma = function (string){
  
  let lowercase = string.toLowerCase();
  let uppercase = string.toUpperCase();
  
  if (string === lowercase){
    
    return "I can't hear you!";
    
  } else if (string === uppercase){
    
    return "YES INDEED!";
    
  } else if (string === "I love you, Grandma.") {
    
    return "I love you, too.";
    
  }
  
};