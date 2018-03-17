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
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string)
{
  var lowstring = string.toLowerCase();
  var upstring = string.toUpperCase();
  if (string == lowstring)
    return ("I can't hear you!");
  if (string == upstring)
    return ("YES INDEED!");
  if (string == "I love you, Grandma.")
    return ("I love you, too.");
}