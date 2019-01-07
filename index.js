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
  var uppercase = 'HELLO'
  var lowercase = 'hello'
  
  if (string === lowercase)
  {
    console.log("HELLO")
  }
}
function logWhisper(string)
{
  var uppercase = 'HELLO'
  var lowercase = 'hello'
  
  if (string === uppercase)
  {
    console.log("hello")
  }
}

function sayHiToGrandma(string)
{
  var uppercase = 'HELLO'
  var lowercase = 'hello'
  
  if(string === lowercase)
    return "I can\'t hear you!"
    
  if (string === uppercase)
    return "YES INDEED!"
  
  if (string === "I love you, Grandma.")
    return "I love you, too."
  
}
