function shout(Arg)
{
  return Arg.toUpperCase();
}

function whisper(Arg)
{
  return Arg.toLowerCase();
}

function logShout(Arg)
{
  console.log(Arg.toUpperCase());
}

function logWhisper(Arg)
{
  console.log(Arg.toLowerCase());
}

function sayHiToGrandma(Arg)
{
  if(Arg===Arg.toLowerCase())
    return "I can't hear you!";
  else if(Arg===Arg.toUpperCase())
    return "YES INDEED!";
  else if(Arg=='I love you, Grandma.')
    return 'I love you, too.';
}
