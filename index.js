function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  if((string='HELLO')&&(string.toUpperCase()===string)){
    console.log(string);
  }
}

function logWhisper(string){
  if(string='hello'){
    console.log(string);
  }
}

function sayHiToGrandma(string){
  var response;
  if(string.toLowerCase()===string){
    response = 'I can\'t hear you!'
  } else if(string.toUpperCase()===string){
    response = 'YES INDEED!'
  } else if(string==='I love you, Grandma.'){
    response = 'I love you, too.'
  }
  return response;
}
