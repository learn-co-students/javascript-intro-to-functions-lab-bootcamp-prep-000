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
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string)
{
  var msg = string
  if (msg.toLowerCase() === msg)
  {
    return "I can't hear you!"
  }
}

function sayHiToGrandma(string)
{
  var msg = string
  if (msg.toLowerCase() === msg)
  {
    return "I can't hear you!"
  }
  else if (msg.toUpperCase() === msg)
  {
    return "YES INDEED!"
  }
  else if (msg === "I love you, Grandma.")
  {
    return "I love you, too."
  }
}
