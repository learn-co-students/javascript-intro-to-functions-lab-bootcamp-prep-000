function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var uppercase = string.toUpperCase();
  console.log(uppercase);
}

function logWhisper(string){
  var lowercase = string.toLowerCase();
  console.log(lowercase);
}

function sayHiToGrandma(string){

  if(string.toUpperCase() === string){
    return "YES INDEED!";
  } else if(string.toLowerCase() === string){
    return "I can't hear you!";
  } else if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}