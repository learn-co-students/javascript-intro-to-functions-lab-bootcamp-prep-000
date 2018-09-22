

function shout(string) 
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string)
{
  var up = shout(string)
  console.log(up)
}
function logWhisper(string)
{
  var down = whisper(string)
  console.log(down)
}
function sayHiToGrandma(string) {
  var down = whisper(string)
  if (string == down) {
    return "I can't hear you!"
  } 
  
  var up = shout(string)
  if (string == up) { 
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma."){
    return "I love you, too."
  }
}

