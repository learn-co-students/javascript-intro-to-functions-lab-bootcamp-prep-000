function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout() {
  console.log('HELLO')
}
function logWhisper() {
  console.log('hello')
}
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    var lowerCase = string.toLowerCase()
    return ("I can\'t hear you!");
  }
  else if (string === string.toUpperCase()) {
    var upperCase = string.toUpperCase()
    return ("YES INDEED!");
    }
    else{
      var mixedCase = "I love you, too."
      return(mixedCase)
    }
}
