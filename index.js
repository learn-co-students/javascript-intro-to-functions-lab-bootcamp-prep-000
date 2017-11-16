function shout(string) {
  return string.toUpperCase()
}
shout('Hello')

function whisper(string) {
  return string.toLowerCase()
}
whisper('Hello')

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')

//var lowercase = 'hello'
//var uppercase = 'HELLO'
//var mixedcase = 'Hi There'
//lowercase.toLowerCase === lowercase
//uppercase.toUpperCase === uppercase
//mixedcase.toLowerCase === mixedcase
//mixedcase.toUpperCase === mixedcase

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"}
    else if (string === string.toUpperCase()) {
    return "YES INDEED!"}
    else if (string ==='I love you, Grandma.') {
  return 'I love you, too.'}
}
sayHiToGrandma('HELLO')
