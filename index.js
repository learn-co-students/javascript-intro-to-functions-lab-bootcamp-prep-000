function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return 'I can\'t hear you!';
  } else if( string === string.toUpperCase()){
    return "YES INDEED!";
  }else if(string.includes("I love you, Grandma.")){
    return "I love you, too.";
  }

}
