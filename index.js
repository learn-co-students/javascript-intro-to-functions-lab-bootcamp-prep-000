function shout(string){
return string.toUpperCase();
}
function whisper(string){return string.toLowerCase()}
function logShout(string){console.log(string.toUpperCase())}
function logWhisper(string){console.log(string.toLowerCase())}

function sayHiToGrandma(arg){
  if(arg===whisper(arg)){
    return "I can't hear you!" ;
  }
  else if(arg===shout(arg)){
    return"YES INDEED!";
  }
else if(arg==="I love you, Grandma."){
  return"I love you, too.";

}
}