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
  var lowercase = "hello"
  var uppercase = 'HELLO'
  var mixedcase = "I love you, Grandma"
    if (string === lowercase){
      return "I can't hear you!"
    }else if (string === uppercase) {
      return "YES INDEED!"
    }else {
      return "I love you, too."
    }
}
