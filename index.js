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
  var string1 = string.toUpperCase();
  console.log(string1);
}

function logWhisper(string)
{ 
  var string2 = string.toLowerCase();
  console.log(string2);
}

function sayHiToGrandma(string)
{
  if (string === string.toUpperCase())
    return "YES INDEED!";
  
  if (string === string.toLowerCase()) 
    return "I can't hear you!";

  if (string !== string.toLowerCase()&&
      string !== string.toUpperCase())
    return "I love you, too.";
}
  





