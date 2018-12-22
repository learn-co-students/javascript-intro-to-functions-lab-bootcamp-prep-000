
function shout(words){
  return words.toUpperCase()
}

function whisper(words){
  return words.toLowerCase()
}

function logShout(words){
  console.log(shout(words))
}

function logWhisper(words){
  console.log(whisper(words))
}

function sayHiToGrandma(words){
  if (words === "hello"){
    return ('I can\'t hear you!')
  }
  if (words === 'HELLO'){
    return ('YES INDEED!')
  }
  if (words === 'I love you, Grandma.'){
    return ('I love you, too.')
  }
}

