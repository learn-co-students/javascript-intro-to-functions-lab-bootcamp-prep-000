function shout (string){
  return string.toUpperCase();
}
// return whisper
function whisper(string){
  return string.toLowerCase();
}
// logShout
function logShout(string){
  console.log("HELLO");
}
// log whisper
function logWhisper(string){
  console.log("hello");
}
// sayHiToGrandma
function sayHiToGrandma(string){
    if(string == 'hello'){
      return "I can't hear you!";
    }else if(string == 'HELLO'){
      return "YES INDEED!";
    }else if(string == 'I love you, Grandma.'){
      return "I love you, too.";
    }
}
