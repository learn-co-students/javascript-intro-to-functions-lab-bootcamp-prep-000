function shout (string) {
  return string.toUpperCase()
}
function whisper (string){
  return string.toLowerCase()
}
function logShout (string){
  var logShout = 'Hello'
  console.log (string.toUpperCase())
}
function logWhisper (string){
  var logWhisper = 'Hello'
  console.log (string.toLowerCase())
}
function sayHiToGrandma (string){
  var  mixedCase = 'I love you, Grandma'
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
    if (string == lowercase) {
      return ("I can't hear you!")
    }
    else if (string == uppercase) {
      return ("YES INDEED!")
    }
    else if (mixedCase){
      return ("I love you, too.")
    }
}
