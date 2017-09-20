function shout(string) {
  return string.toUpperCase();
}

 function whisper(string) {
   return string.toLowerCase();
 }

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}
//sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
function sayHiToGrandma(string) {
  if(string === string.toLowerCase())
  return 'I can\'t hear you!'
}
//sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:
function sayHiToGrandma(string) {
  if(string === string.toUpperCase())
  return 'YES INDEED!'
}

function sayHiToGrandma(string) {
  if(string === 'I love you, Grandma.')
  return "I love you, too."
}
