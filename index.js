function shout(string) 
{
  return string.toUpperCase()
}
function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var cantUnswer = "I can't hear you!"
  var yesUnswer = "YES INDEED!"
  var loveUnswer = "I love you, too."
  if (string.toLowerCase(string) === string) {
    return cantUnswer;
  }
  else if (string.toUpperCase(string) === string) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === string) {
    return loveUnswer;
  }
}
  