function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout(string){
  console.log('HELLO')
}
spy('hello')
function logWhisper(string) {
  console.log('hello')
}
spy('HELLO')
function sayHiToGrandma(string) {
  if (string === 'hello')
  return ("I can\'t hear you!")
  else if (string ==='HELLO')
  return ('YES INDEED!')
  else (string === "I love you, Grandma.")
  return ('I love you, too.')
}
