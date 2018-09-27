function shout(string)
{
  return string.toUpperCase();
}

function whisper(greeting)
{
  return greeting.toLowerCase();
}

function logShout(something)
{
  something = something.toUpperCase();
  
  console.log(something);
  
}

function logWhisper(anything)
{
  anything = anything.toLowerCase();
  
  console.log(anything);
}

function sayHiToGrandma(hello)
{
  let lowerchars = hello.toLowerCase();
  let uppercase = hello.toUpperCase();
  
   if (hello === "I love you, Grandma." )
 {
   return "I love you, too.";
   
 } else if (hello.toUpperCase() === uppercase ) 
  {
    return "YES INDEED!"; 
    
  } else if (hello.toLowerCase() === lowerchars ) 
  {
      return "I can\'t hear you!"; 
     
  } 
  
}

