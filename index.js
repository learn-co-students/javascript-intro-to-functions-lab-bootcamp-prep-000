//test 1
function shout(string){
  return string.toUpperCase();
}
//test 2
function whisper(string){
  return string.toLowerCase();
}
//test 3
function logShout(string) {
  return console.log(string.toUpperCase());
}
//test 4
function logWhisper(string) {
  return console.log(string.toLowerCase());
}
//test 5
/*function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
}
sayHiToGrandma("Hello");
*/
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
