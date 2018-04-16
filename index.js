function shout(string) {
  return string.toUpperCase()
}
shout("hello")
function whisper(string) {
  return string.toLowerCase()
}
whisper("HELLO")
function logShout(string){
 console.log(string.toUpperCase())
}
logShout("hello")

 function logWhisper(string){
  console.log(string.toLowerCase())

 }
 logWhisper("HELLO")


 function sayHiToGrandma(string){
   var lowercase = string.toLowerCase()
   var uppercase = string.toUpperCase()


   if (string === lowercase){
     return 'YES INDEED!'
   }else if (string === uppercase) {
    return "I can't hear you!"
  }else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
