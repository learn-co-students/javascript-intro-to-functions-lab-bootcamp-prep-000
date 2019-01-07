function shout(word){
  word = word.toUpperCase()
  return(word)
}

function whisper(word){
  word = word.toLowerCase()
  return(word)
}

function logShout(word){
  console.log(shout(word))
}

function logWhisper(word){
  console.log(whisper(word))
}

function sayHiToGrandma(word){
  if (word == word.toLowerCase()){
    return("I can't hear you!")
  }
  else if(word == word.toUpperCase()){
    return("YES INDEED!")
  }
  else if(word == "I love you, Grandma."){
    return("I love you, too.")
  }
}