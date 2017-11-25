function shout(string){
return string.toUpperCase();}

function whisper(string){
  return string.toLowerCase();}
  
function logShout(string){
  console.log(shout(string));}
  
function logWhisper(string){
  console.log(whisper(string));}

function sayHiToGrandma(string){
  var uppercase="HELLO",lowercase="hello";
  if (string===lowercase){return 'I can\'t hear you!';}
  else if (string===uppercase){return 'YES INDEED!';}
  else if (string==="I love you, Grandma."){return "I love you, too.";}}
console.log(sayHiToGrandma('hello!'));
console.log(sayHiToGrandma('HELLO!'));
console.log(sayHiToGrandma("I love you, Grandma."));
