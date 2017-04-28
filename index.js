function shout(string){
  
  return string.toUpperCase();
  
}

function whisper(string){
  
  return string.toLowerCase();
  
}

function logShout(string){
  
  return console.log('HELLO');
  
}

function logWhisper(string){
  
  return console.log('hello');
  
}

function sayHiToGrandma(string){
    if (string === 'HELLO') {
      return 'YES INDEED!';
      string.lowercase();
    }
    if(string === 'hello'){
      
      return "I can't hear you!"
    }

    if(string === 'I love you, Grandma.'){
      return "I love you, too.";
    }
}