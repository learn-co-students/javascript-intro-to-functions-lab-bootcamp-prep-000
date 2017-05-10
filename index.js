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
  //console Shout
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string)
{
  //if lower case I cant hear you
  //if uppercase YERS INDEED
  //  if "I love you, Grandma"
    //I love you, too
    if  (string===string.toLowerCase()) 
    {return "I can't hear you!";}
    if (string===string.toUpperCase())
    {return "YES INDEED!";}
    if (string==="I love you, Grandma.")
    {return "I love you, too.";}
}
shout("Hello");
whisper("Hello");
logShout("Hello");
logWhisper("Hello");
console.log(sayHiToGrandma("hello"));