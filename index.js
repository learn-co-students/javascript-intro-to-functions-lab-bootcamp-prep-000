function shout(string){
  var string = string.toUpperCase();
  return string;
}

function whisper(string){
  var string = string.toLowerCase();
  return string;
}

function logShout(string){
  var string = string.toUpperCase();
  console.log(string);
}

function logWhisper(string){
  var string = string.toLowerCase();
  console.log(string);
}

function sayHiToGrandma(string){
  var string;
  if (string === string.toLowerCase()){
    return "I can't hear you!";
  } else if (string === string.toUpperCase()){
    return "YES INDEED!";
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
  }
