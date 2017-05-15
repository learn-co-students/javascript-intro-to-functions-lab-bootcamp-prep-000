function shout(x){
  return x.toUpperCase();
}

function whisper(x){
  return x.toLowerCase();
}

function logShout(x){
  console.log(shout(x));
}

function logWhisper(x){
  console.log(whisper(x));
}

function sayHiToGrandma(x){
  var test = x.toLowerCase();
  var caps = x.toUpperCase();
  if(test === x) {
    return "I can't hear you!";
  }
  else if (x === "I love you, Grandma.") {
    return "I love you, too.";
  }
  else if (caps === x){
    return "YES INDEED!";
  }
  else {
    return "lmao";
  }
}