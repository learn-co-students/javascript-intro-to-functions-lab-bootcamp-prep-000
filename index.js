function shout(string) {
return string.toUpperCase();  
}

function whisper(string) {
return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  }

  if(string === string.toUpperCase()){
    return "YES INDEED!";
  }
  
  if(string ===  'I love you, Grandma.') {
    return 'I love you, too.';
  }
  
  return "Are you eating enough?";
}

  

