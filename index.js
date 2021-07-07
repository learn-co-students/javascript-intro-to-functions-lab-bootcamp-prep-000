function shout(strIn)
{
  return strIn.toUpperCase()
}

function whisper(strIn)
{
  return strIn.toLowerCase();
}

function logShout(strIn)
{
  console.log(strIn.toUpperCase());
}

function logWhisper(strIn)
{
  console.log(strIn.toLowerCase());
}

function sayHiToGrandma(strIn)
{
  if (strIn.toLowerCase() === strIn)
    return "I can't hear you!";
  if (strIn.toUpperCase() === strIn)
    return "YES INDEED!";
  if (strIn === "I love you, Grandma.")
    return "I love you, too."
}
