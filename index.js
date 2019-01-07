function shout(string) {
  return string.toUpperCase()
}
shout("Hello!")

function whisper(string) {
  return string.toLowerCase()
}
whisper("Hello!")

function logShout(string) {
  console.log (string.toUpperCase())
}
logShout("hello")

function logWhisper(string) {
  console.log (string.toLowerCase())
}
logWhisper("whisper")

function sayHiToGrandma(string) {
  if(string.toUpperCase() === string){
    return `YES INDEED!`
}
if(string.toLowerCase() === string){
  return `I can't hear you!`
}
if(string = "I love you, Grandma.") {
  return `I love you, too.`
}
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma('I love you, Grandma.')
}
