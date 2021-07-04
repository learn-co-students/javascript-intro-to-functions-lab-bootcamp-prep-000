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
  
  
var lowercase = "hello!" // Not needed
var uppercase = "HELLO!" // Not needed
var mixedCase = 'I love you, Grandma.' // Was missing a period after "Grandma"

if (string === string.toLowerCase()) { // compare the argument to itself
  return 'I can\'t hear you!' // Was missing the \'
} 
else if (string === string.toUpperCase()) { // comapre the argument to itself
  return ('YES INDEED!')
} 
else if (string === mixedCase){
  return ('I love you, too.')
}
}