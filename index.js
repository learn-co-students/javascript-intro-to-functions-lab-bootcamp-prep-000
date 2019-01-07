function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string)
{console.log("hello".toUpperCase())
}
function logWhisper(string){
  console.log("HELLO".toLowerCase())
}
function sayHiToGrandma(string){
  switch(string){
    case "HELLO":
    return "YES INDEED!";
    case "hello":
    return "I can't hear you!";
    case "I love you, Grandma.":
    return "I love you, too."
  }
}
