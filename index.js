function shout(words){
  return words.toUpperCase()
}

function whisper(words){
  return words.toLowerCase()
}

function logShout(words){
  console.log(words.toUpperCase());
}
function logWhisper(words){
  console.log(words.toLowerCase());
}
function sayHiToGrandma(words){
  if(words.toUpperCase() === words){
    return "YES INDEED!"
  }else if(words.toLowerCase() === words){
    return "I can't hear you!"
  }
  return "I love you, too."
}
