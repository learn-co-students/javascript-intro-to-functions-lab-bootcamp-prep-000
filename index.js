function shout(phrase){
  return phrase.toUpperCase();
}

function whisper(phrase){
  return phrase.toLowerCase();
}

function logWhisper(phrase){
  console.log(whisper(phrase));
}

function logShout(phrase){
  console.log(shout(phrase));
}

function sayHiToGrandma(phrase){
  if (phrase === whisper(phrase)){
    return "I can't hear you!";
  }
  else if (phrase === shout(phrase)){
    return 'YES INDEED!';
  }
  return 'I love you, too.';
}