function shout(string)
{
  return string.toUpperCase()
}


function whisper(string)
{
  if (string === string.toUpperCase())
  {
    return string.toLowerCase()
  }
  else
  {
    return string
  }
}


function logShout(string)
{

     if (string === string.toUpperCase())
     {
       console.log(string)
     }
     else
     {
       console.log(string.toUpperCase())
     }
}

function logWhisper(string)
{
  if (string === string.toLowerCase())
  {
    console.log(string)
  }
  else
  {
    console.log(string.toLowerCase())
  }
}


function sayHiToGrandma(string)
{
  if (string === string.toUpperCase())
  {
    return "YES INDEED!"
  }

  if (string=== string.toLowerCase())
  {
    return "I can't hear you!"
  }

  if (string=== "I love you, Grandma.")
  {
    return "I love you, too."
  }
}
