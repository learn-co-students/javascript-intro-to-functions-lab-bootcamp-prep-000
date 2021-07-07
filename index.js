function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var mixedCase = string;
  var lowercase = mixedCase.toLowerCase();
  var uppercase = mixedCase.toUpperCase();
  if (mixedCase === lowercase) {
    return "I can't hear you!";
  } 
  if (mixedCase === uppercase) {
    return "YES INDEED!";
  } 
  if (mixedCase === 'I love you, Grandma.') {
    return "I love you, too.";
  }
}