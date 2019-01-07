function shout(string){
  return string.toUpperCase()
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(shout(word))
}

function logWhisper(word){
  console.log(whisper(word))
}

function sayHiToGrandma(string){
  if (string === 'I love you, Grandma.'){
    return('I love you, too.')
  }
  if (string.toLowerCase() === string){
    return 'I can\'t hear you!'
  } else if (string.toUpperCase() === string){
    return('YES INDEED!')
  }
}

