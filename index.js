function shout(words){
  var responce = words.toUpperCase()
  return responce;
}

function whisper(words){
  return words.toLowerCase();
}
function logWhisper(words){
  var out = words.toLowerCase();
  console.log(out);
}

function logShout(words){
  console.log(words.toUpperCase());
}

function sayHiToGrandma(words){
  var lowercase = words.toLowerCase();
  var uppercase = words.toUpperCase();
  if (words != lowercase && words!= uppercase) {
    return "I love you, too.";
  }else if(words === lowercase){
    return "I can't hear you!";
  }else if(words === uppercase){
    return "YES INDEED!";
  }
  }
