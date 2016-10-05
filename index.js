function shout(string){
  return 'Hello'.toUpperCase();
}
shout();

function whisper(string){
  return 'Hello'.toLowerCase();
}
whisper();

function logShout(string){
  console.log('hello'.toUpperCase());
}
logShout();

function logWhisper(string){
  console.log('HELLO'.toLowerCase());
}
logWhisper();

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!";
  }else if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
sayHiToGrandma();
