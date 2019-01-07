var shout = function shout(string) {
  return string.toUpperCase()
}

var whisper = function whisper(string) {
  return string.toLowerCase()
}

var logShout = function logShout(string) {
  console.log('HELLO')
}
 var logWhisper = function logWhispter(string) {
   console.log('hello')
 }

var sayHiToGrandma = function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.'){
    return "I love you, too."
  } else if (string != string.toLowerCase()){
    return "YES INDEED!"
  } else if (string != string.toUpperCase()){
    return "I can't hear you!"
  }
}
