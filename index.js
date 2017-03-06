function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}


function logShout(string){
  var uppercase = string.toUpperCase();
  console.log(uppercase)
  return uppercase
}

function logWhisper(string){
  var lowerCase = string.toLowerCase();
  console.log(lowerCase)
  return lowerCase
}

function sayHiToGrandma(string){

  if(string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }

  if(string === string.toLowerCase()){
    return "I can't hear you!"
  }

  if(string === string.toUpperCase()){
    return "YES INDEED!"
  }
  return undefined 
}