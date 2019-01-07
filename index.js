function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
   return string.toLowerCase()
}
function sayHiToGrandma(greeting) {
  //greeting = "hello"
  if (greeting.toLowerCase() === greeting) {
    return "I can't hear you!";
  } else if (greeting.toUpperCase()===greeting) {
    return "YES INDEED!";
  } else if (greeting === "I love you, Grandma."){
    return "I love you, too." ;
  }
}
console.log(sayHiToGrandma('Hello'));
function logWhisper(string){
 console.log(string.toLowerCase())
}
function logShout(string){
  console.log(string.toUpperCase())
}
