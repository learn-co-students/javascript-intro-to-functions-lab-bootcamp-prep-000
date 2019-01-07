function shout(message)
{
  return message.toUpperCase();
}

function whisper(message)
{
  return message.toLowerCase();
}

function logShout(message)
{
  console.log(message.toUpperCase());
}

function logWhisper(message)
{
  console.log(message.toLowerCase());
}

function sayHiToGrandma(message)
{
  if(message === whisper(message))
  {
    return "I can't hear you!"
  }
  else if (message === shout(message))
  {
    return 'YES INDEED!'
  }
  else if (message === 'I love you, Grandma.')
  {
      return 'I love you, too.'
  }
}