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
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
   console.log(string.toLowerCase())
}

function sayHiToGrandma(string)
{
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var luvU  = "I love you, Grandma."
  
  if(string === lowercase)
  {
    var deaf = "I can't hear you!"
    return deaf
  }
 if(string === uppercase)
  {
    var sheCanHear = 'YES INDEED!'
    return sheCanHear
  }
  if(string === luvU)
  {
    return 'I love you, too.'
  }
}

