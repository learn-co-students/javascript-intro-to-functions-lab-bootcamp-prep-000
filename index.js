function shout(string){
  return string.toUpperCase()
}


function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  if (str === 'hello'){
    return "I can't hear you!";
  }

  else if (str == 'HELLO'){
    return "YES INDEED!";
  }
  else if (str == "I love you, Grandma."){
    return "I love you, too."
  }


}
