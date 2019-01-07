function shout(string) {
  return string.toUpperCase()
}
shout("hello")

function whisper(string) {
  return string.toLowerCase()
}
whisper("hello")

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout("hello")

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper("hello")

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return("I can\'t hear you!")
    }
   if (string.toUpperCase() === string) {
     return("YES INDEED!")
   }
    if (string === "I love you, Grandma."){
      return("I love you, too.")
    }

}

sayHiToGrandma("hi grandma")
