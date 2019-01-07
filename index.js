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
  
  var lString = string.toUpperCase();
  
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }
  
  if (string === lString) {
    return 'YES INDEED!';
    }
  else {
    return "I can't hear you!";
  }
}
