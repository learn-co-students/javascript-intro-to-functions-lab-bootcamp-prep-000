function shout(string) {
  return string.toUpperCase() //'HELLO, MCFLY?!'
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
var lowercase = 'hello'
lowercase.toLowerCase===lowercase
var uppercase = 'HELLO'
uppercase.toUpperCase===uppercase
var mixedcase = 'I love you, Grandma.'

function sayHiToGrandma(string) {
  if(string === lowercase) {
    return `I can\'t hear you!`
  }
  if(string === uppercase){
    return `YES INDEED!`
  }
  if(string === mixedcase) {
    return `I love you, too.`
  }
}
