function shout(string)
{
 return string.toUpperCase() // 'STRING!'
}

function whisper(string)
{
  return string.toLowerCase() // 'STRING -> string'
}

function logShout(string)
{
  console.log(`${string.toUpperCase()}`)
}

function logWhisper(string)
{
  console.log(`${string.toLowerCase()}`)
}

function sayHiToGrandma(string)
{
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var iLoveYou = "I love you, Grandma."
  if(string === uppercase)
  {
    return "YES INDEED!"
  }
  else if (string === lowercase)
  {
    return "I can't hear you!"
  }
  else if (string === iLoveYou)
  {
    return "I love you, too."
  }
}