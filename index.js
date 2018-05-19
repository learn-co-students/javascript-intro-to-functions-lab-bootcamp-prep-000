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
  var love = "I love you, Grandma."
  var cantHear = 'I can\'t hear you!'
  var indeed = 'YES INDEED!'
  
  if(string === string.toLowerCase()){
    return cantHear
  }else if(string === string.toUpperCase())
  {
    return indeed
  }else if(string === love)
  {
    return 'I love you, too.'
  }
}