function shout(string){
  return string.toUpperCase()
  //receives one argument and returns it in all caps
}
function whisper(string){
return string.toLowerCase()
//receives one argument and returns it in all lowercase
}
function logShout(string){
  //calls console.log() its one argument in all caps
  console.log(string.toUpperCase())
}
function logWhisper(string){
//'calls console.log() its one argument in all lowercase'
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
//'returns "I can\'t hear you!" if `string` is lowercase'
if (string===string.toLowerCase()) {
return 'I can\'t hear you!'
}
else if (string===string.toUpperCase()) {
// returns "YES INDEED!" if `string` is uppercase'
return 'YES INDEED!'
}
else if (string==="I love you, Grandma.") {
return 'I love you, too.'
//returns "I love you, too." if `string` is "I love you, Grandma
}
}
