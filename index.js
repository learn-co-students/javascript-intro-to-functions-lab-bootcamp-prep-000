function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  var caps = str.toUpperCase();
  console.log(caps);
}

function logWhisper(str){
  var whisper = str.toLowerCase();
  console.log(whisper);
}

function sayHiToGrandma(str){
  if (str.toLowerCase()===str){
    return "I can\'t hear you!";
  } else if (str.toUpperCase() === str){
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
