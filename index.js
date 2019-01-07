function shout(str)
{
 return str.toUpperCase();
}

function whisper(str)
{
  return str.toLowerCase();
}

function logShout(str)
{
  console.log(str.toUpperCase());
}

function logWhisper(str)
{
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str)
{
  if (str.toLowerCase()=='i love you, grandma.')
    return 'I love you, too.';
  
 if(str.toLowerCase()==str)
    return "I can't hear you!";
    
 if(str.toUpperCase()==str)
    return 'YES INDEED!';

}

console.log(shout('mmm'));