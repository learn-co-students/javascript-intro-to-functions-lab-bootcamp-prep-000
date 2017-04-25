function shout(string) {
  return string.toUpperCase() //'Hello!'
}
function whisper(string) {
  return string.toLowerCase() //'hello!'
}
function logShout(string) {
  return console.log(string.toUpperCase())
}
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var lowercase = "hello" // "hello" is lowercase
  var uppercase = "HELLO" // "hello" is uppercase

  if(string === lowercase){   //if string = hello return I can't hear you
    return "I can't hear you!"
  }else if (string === uppercase) {
    return "YES INDEED!"
  }else if (string === "I love you, Grandma."){
    return 'I love you, too.'
  }
}
