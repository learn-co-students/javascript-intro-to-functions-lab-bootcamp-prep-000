function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
  var string = 'I can\'t hear you!'
}
  if (string.toUpperCase() === string){
  var string = 'YES INDEED!'
}
  if ("I love you, Grandma." === string){
    var string = 'I love you, too.'
}
return string
}
