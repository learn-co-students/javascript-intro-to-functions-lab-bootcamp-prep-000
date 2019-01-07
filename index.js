function shout(string){
  return string.toUpperCase();
};
function whisper(message){
  return message.toLowerCase();
}
function logShout(message){
  console.log(shout(message));
}
function logWhisper(message){
  console.log(whisper(message));
}
function sayHiToGrandma(message){
/*if(message === 'hello'){
  return "I can't hear you!";
}
else if (true) {
  return
}*/
  switch (message) {
    case 'hello': return "I can't hear you!";
    case 'HELLO': return "YES INDEED!";
    case 'I love you, Grandma.': return "I love you, too.";

      break;
    default:

  }
}

var mess = sayHiToGrandma('hello');
console.log(mess);;
