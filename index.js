function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
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
  var lwr = string;
  if(lwr.toLowerCase() === lwr){
    return "I can't hear you!"
  } else if(lwr.toUpperCase() === lwr){
    return "YES INDEED!"
}else{
  return "I love you, too."
}
  }
  