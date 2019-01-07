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
  
 if(string.toLowerCase()==string)
  {
      const ret="I can't hear you!";
      return ret;
  }
  
  else if(string.toUpperCase()==string)
  {
      const ret="YES INDEED!";
      return ret;
  }
  
  const check="I love you, Grandma.";
  
   
  if(check==string)
  {
      const ret="I love you, too.";
      return ret;
  }
}
