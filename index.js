function shout(temp){
  return temp.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  return console.log(shout(string))
}

function logWhisper(string){
  return console.log(whisper(string))
}

function sayHiToGrandma(string){
  if(string.toLowerCase() === string)
    return "I can\'t hear you!"
  else if(string.toUpperCase() === string)
    return "YES INDEED!"
  else if(string === 'I love you, Grandma.')
    return "I love you, too."
}
