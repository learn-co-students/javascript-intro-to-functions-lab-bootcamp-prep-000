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
  var state = string;
  if(string.toLowerCase() === state){
    return "I can't hear you!";
  } else if (string.toUpperCase() === state){
    return 'YES INDEED!';
  }
  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }

}
