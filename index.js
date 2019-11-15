function shout(string){
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

function sayHiToGrandma(input)
{
  if(input.toLowerCase() === input)
  {
    return "I can't hear you!";
  }
  
  if(input.toUpperCase() === input)
  {
    return "YES INDEED!";
  }
  
  if(input==="I love you, Grandma.")
  {
    return "I love you, too.";
  }
}