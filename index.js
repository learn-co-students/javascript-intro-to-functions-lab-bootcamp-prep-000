// shout
function shout(string)
{
  return string.toUpperCase();
};
// whisper
function whisper(string)
{
  return string.toLowerCase();
};

// logShout
function logShout(string)
{
  console.log(string.toUpperCase());
};
// logWhisper
function logWhisper(string)
{
  console.log(string.toLowerCase());
};

// sayHiToGrandma
function sayHiToGrandma(string)
{
  if (string==='I love you, Grandma.')
  {
    return 'I love you, too.';
  } else
  {
    if (string===string.toLowerCase())
    {
      return 'I can\'t hear you!';
    } else if (string===string.toUpperCase())
    {
      return 'YES INDEED!';
    }
  }
}
