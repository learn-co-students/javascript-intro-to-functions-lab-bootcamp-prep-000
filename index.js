function shout(something){
  return something.toUpperCase();
}

function whisper(little){
  return little.toLowerCase();
}

function logShout(scream){
  console.log("Hello".toUpperCase());
}

function logWhisper(whisp){
  console.log("hello".toLowerCase());
}

function sayHiToGrandma(helloG){
  if (helloG == helloG.toLowerCase()){
    return "I can\'t hear you!";
  }
  else if (helloG == helloG.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (helloG == "I love you, Grandma."){
    return "I love you, too."
  }
}