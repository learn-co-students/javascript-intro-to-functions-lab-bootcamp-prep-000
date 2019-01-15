const shout = string => {
  return string.toUpperCase()
}
const whisper = string => {
  return string.toLowerCase()
}
const logShout = string => {
  console.log(shout(string))
}
const logWhisper = string => {
  console.log(whisper(string))
}
const sayHiToGrandma = string => {
  if(string === string.toLowerCase()) return `I can't hear you!`
  if(string === string.toUpperCase()) return `YES INDEED!`
  if(string === 'I love you, Grandma.') return `I love you, too.`
}
