function shout(string)
{
  return string.toUpperCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function whisper(string)
{
  console.log(string.toLowerCase())
  return string.toLowerCase()
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string)
{
  var hi = string
  if (hi.toLowerCase() === hi) {
     return "I can't hear you!"
  } else if (hi.toUpperCase() === hi){
     return "YES INDEED!"
  } else if (hi === "I love you, Grandma."){
     return "I love you, too."
  }
}




