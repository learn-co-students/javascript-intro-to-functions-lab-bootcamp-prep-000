function sayHiToGrandma(words){
  if(words === words.toUpperCase()){
    return "YES INDEED!"
    
  }
  else if(words === "I love you, Grandma."){
    return "I love you, too."
  }
  else if(words === words.toLowerCase()){
    return "I can't hear you!"
  }
}

function logWhisper(words)
{
  console.log(words.toLowerCase())
  
}
function logShout(words)
{
  console.log(words.toUpperCase())
}

function whisper(words)
{
  return words.toLowerCase()
}

function shout(words)
{
  return words.toUpperCase()
}