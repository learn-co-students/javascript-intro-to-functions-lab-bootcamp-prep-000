function shout(string) {
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function sayHiToGrandma(){
  if(whisper(string) === string.toLowerCase){
    return "I can't hear you";
  }
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log('hello' + string.toLowerCase);
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return console.log("I love you, too")
  }
}