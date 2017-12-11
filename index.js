function shout(a)
{
  return a.toUpperCase();
}

function whisper(b)
{
  return b.toLowerCase();
}

function logShout(c)
{
  console.log(c.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}



function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }}