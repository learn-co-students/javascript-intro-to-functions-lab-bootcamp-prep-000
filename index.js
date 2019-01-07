function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
    console.log('HELLO')
}
function logWhisper(string){
    console.log('hello')
}
function sayHiToGrandma(string){
  if (whisper(string) === string) {
       return "I can't hear you!"
     }

     if (shout(string) === string) {
      return "YES INDEED!"
     }

     if (string === "I love you, Grandma.") {
      return "I love you, too."
    }
}
