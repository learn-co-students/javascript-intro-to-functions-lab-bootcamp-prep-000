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
  var uppercase = "HELLO"
  var lowercase = "hello"
  var loveyou = "I love you, Grandma."
  
  if (string === lowercase) {
    return "I can't hear you!"
  }
  
  if (string === uppercase) {
    return "YES INDEED!"
  }
  
  if (string === loveyou) {
    return "I love you, too."
  }
  
}