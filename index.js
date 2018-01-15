function shout(string)
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase('HELLO')
}
function logShout(string)
{
  console.log('HELLO')
}
function logWhisper(string)
{
  console.log('hello')
}
function sayHiToGrandma(string){
  var yesIndeed = "YES INDEED!" 
  var iCant = "I can't hear you!"
  var iLoveYou = "I love you, too."
  var string2 = "I love you."
  if (string===string.toUpperCase()) {
    return yesIndeed;
  } else if (string===string.toLowerCase())
    return iCant;
  else if (string===string2);
    return iLoveYou
}
