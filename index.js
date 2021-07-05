function shout(string){
  return string.toUpperCase();
}
//shout('hello');
//shout(['HELLO']);

function whisper(string){
  return string.toLowerCase();
}
//whisper('HELLO');
//whisper(['hello']);

 function logShout(string){
   console.log(string.toUpperCase());
 }
 //logShout('hello');
 //logShout(['HELLO']);
 
function logWhisper(string){
  console.log(string.toLowerCase());
}
//logWhisper("HELLO");
//logWhisper(['hello']);

function sayHiToGrandma(string){
  if(string  === string.toLowerCase()) {
    return "I can\'t hear you!";
  }
  if(string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if(string === "I love you, Grandma.") {
    return 'I love you, too.';
  }
}
