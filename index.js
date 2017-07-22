function shout(itOut) {
  var shouted = itOut.toUpperCase();
  return shouted;
}

function logShout(itOut){
    var shouted = itOut.toUpperCase();
    console.log(shouted);
}

function whisper(itQuietly){
  var whispered = itQuietly.toLowerCase();
  return whispered;
}

function logWhisper(itQuietly){
  var whispered = itQuietly.toLowerCase();
  console.log(whispered);
}

function sayHiToGrandma(grandmaGreeting){
  if (grandmaGreeting == whisper(grandmaGreeting)){
    return "I can't hear you!";
  }
  if (grandmaGreeting == shout(grandmaGreeting)){
    return "YES INDEED!";
  }
  if (grandmaGreeting == "I love you, Grandma.") {
    return "I love you, too."
  }
  // else{
  //   return null;
  // }
}
