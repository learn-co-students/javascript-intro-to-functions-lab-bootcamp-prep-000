function shout(string){
  return string.toUpperCase();
  //return this.string.caps;
}
function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  //if (string === string.toUpperCase()){
    console.log(string.toUpperCase())
  }


function logWhisper(string){
  //var lower = string.toLowerCase()
  //if (lower === string){
    console.log(string.toLowerCase())
  }


function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  } else if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if (string === 'I love you, Grandma.') {
      return 'I love you, too.'
    }

  }
logShout('HOLA')
