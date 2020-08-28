function shout(string) { 
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var constantSentence = 'string';

function logShout(constantSentence) {
console.log(constantSentence.toUpperCase());
} 

function logWhisper(constantSentence) {
  console.log(constantSentence.toLowerCase());
}

function sayHiToGrandma (string) {
  var notHeard = "I can't hear you!";
  var heard = "YES INDEED!";
  var love = "I love you, too.";
  if (string.toLowerCase() === string) {
    return notHeard;
  }
  else if (string.toUpperCase() === string) {
    return heard;
  }
  else if ("I love you, Grandma." === string) {
    return love;
  }
}

  

  




  
  