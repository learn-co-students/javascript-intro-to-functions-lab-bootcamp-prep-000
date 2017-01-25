function shout(string){

  return string.toUpperCase()
}

function sayHiToGrandma(string){
  switch(string){
  case string.toLowerCase():
     return "I can\'t hear you!"
  case string.toUpperCase():
     return "YES INDEED!" 
  default:
      return "I love you, too."
}
}

function whisper(string){
  return string.toLowerCase()
}

function logWhisper(string)
{
  return console.log(string.toLowerCase())
}

function logShout(string)
{
  return console.log(string.toUpperCase())
}
