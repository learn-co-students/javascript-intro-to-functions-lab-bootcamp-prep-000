function shout(word){
  return word.toUpperCase();
}

function whisper(word){
  return word.toLowerCase();
}

function logShout(word){
  console.log(word.toUpperCase());
}

function logWhisper(word){
  console.log(word.toLowerCase());
}




function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return ("I can\'t hear you!")
  } else if (string.toUpperCase() === string) {
    return ("YES INDEED!")
  } else if (string === 'I love you, Grandma.'){
    return ("I love you, too.")
  }
}

sayHiToGrandma(hello);
sayHiToGrandma(HELLO);
sayHiToGrandma("I love you, Grandma.");