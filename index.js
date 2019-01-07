function shout(abc)
{
  return abc.toUpperCase()
}

function whisper(ABC)
{
  return ABC.toLowerCase()
}
function logShout(abc)
{
   var z = abc.toUpperCase()
   console.log(z);
}
function logWhisper(ABC)
{
  var a = ABC.toLowerCase()
  console.log(a);
}
function sayHiToGrandma(abc)
{
  if (abc === abc.toLowerCase())
  {
    return "I can't hear you!";
  }
  else if (abc === abc.toUpperCase())
  {
    return "YES INDEED!";
  }
  else if (abc === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}
