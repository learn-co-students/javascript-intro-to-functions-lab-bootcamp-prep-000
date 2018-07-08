function shout(string) 
{
  var output = string.toUpperCase()
  return output
}

function whisper(string)
{
  var output = string.toLowerCase()
  return output
}

function logShout(string)
{
  console.log(shout(string))
}

function logWhisper(string)
{
  console.log(whisper(string))
}

function sayHiToGrandma(string)
{
  if(string.toLowerCase() === string)
  {
    return "I can't hear you!"
  }
  
  else if( string.toUpperCase() === string)
  {
    return "YES INDEED!"
  }
  
  else if(string === "I love you, Grandma.")
  {
    return "I love you, too."
  }
  
}

