function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  return console.log(str.toUpperCase());
}

function logWhisper(str){
  return console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  if (str === "I love you, Grandma."){
    return "I love you, too.";
  }
  if (str === str.toUpperCase()){
    return "YES INDEED!";
  }
  if (str === str.toLowerCase()){
    return "I can't hear you!"
  }
}
