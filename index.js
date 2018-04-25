function shout(allcaps) {
  return allcaps.toUpperCase()
}

function whisper(lowercase) {
  return lowercase.toLowerCase()
}

function logShout(string) {

  console.log(string.toUpperCase())
}

function logWhisper(whisper) {
  console.log(whisper.toLowerCase())
}

function sayHiToGrandma(talking) {
if(talking === talking.toLowerCase()) {
  return('I can\'t hear you!')
}
    if(talking === talking.toUpperCase()) {
    return('YES INDEED!')

}  if (talking === 'I love you, Grandma.') {
  return('I love you, too.')
}
}
