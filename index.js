function shout(String)
{
  return String.toUpperCase()
}

function whisper(String)
{
  return String.toLowerCase()
}

function logShout(String)
{
  console.log(String.toUpperCase())
}

function logWhisper(String)
{
  console.log(String.toLowerCase())
}

function sayHiToGrandma(String)
{
  
  var unheard = "I can't hear you!"
  var heard = "YES INDEED!"
  var iLoveYou = "I love you, too."
  
  if(String === "I love you, Grandma.")
  {
    return iLoveYou
  }
  else if(String.toLowerCase() === String)
  {
    return unheard
  }
  else if (String.toUpperCase() === String)
  {
    return heard
  }
}

