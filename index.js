function shout(string){
  return string.toUpperCase()
}
function whisper(HELLO){
  return HELLO.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string){
  console.log(string.toLowerCase())
}
logWhisper('HELLO')

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
}
else if (string === string.toUpperCase()) {
    return "YES INDEED!";
} else if ('I love you, Grandma.') {
  return 'I love you, too.'
}

sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma('I love you, Grandma.')
