function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  var temp = string;
  if(string == "I love you, Grandma."){
    return "I love you, too.";
  }
  else if (string == temp.toLowerCase()){
    return "I can't hear you!";
  }
  else if(string == temp.toUpperCase()){
    return "YES INDEED!";
  }
}
