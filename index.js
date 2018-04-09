var statement="Hello"


function shout(phrase){
  return phrase.toUpperCase();
}

function whisper(phrase){
  return phrase.toLowerCase();
}

function logShout(phrase){
  console.log (shout(phrase));
}
function logWhisper(phrase){
  console.log(whisper(phrase));
}
function sayHiToGrandma(string){
  if (string===string.toLowerCase()){
    return "I can't hear you!";
  }
  else if (string===string.toUpperCase()){
    return "YES INDEED!";
  }
  else if (string==="I love you, Grandma."){
    return "I love you, too.";
  }
}


sayHiToGrandma(whisper(statement))




