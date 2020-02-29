function shout(string)
  {
    return string.toUpperCase();
  }

function whisper(string)
{
  return string.toLowerCase();
}

function logShout(string)
{
  var stringUpper = string.toUpperCase();
  console.log(stringUpper);
}

function logWhisper(string)
{
  var stringLower = string.toLowerCase();
  console.log(stringLower);
}

function sayHiToGrandma(string)
{
  if(string.toLowerCase() === string)
  {
    return `I can\'t hear you!`;
  } else if(string.toUpperCase() === string)
  {
    return "YES INDEED!";
  } else if(string === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}

