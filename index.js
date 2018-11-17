function shout(phrase){
  return phrase.toUpperCase();
}

function whisper(phrase){
  return phrase.toLowerCase();
}

function logShout(phrase){
  console.log(phrase.toUpperCase());
}

function logWhisper(phrase){
  console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase){
  if(phrase === phrase.toUpperCase()){
    return "YES INDEED!";
  } else if (phrase === "I love you, Grandma."){
    return "I love you, too.";
  } else {
    return "I can't hear you!";
  }
}