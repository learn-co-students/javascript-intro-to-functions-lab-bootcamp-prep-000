function shout(string)
{
  return string.toUpperCase()
}
//Above function displays the text message in all caps

function whisper(string)
{
  return string.toLowerCase()
}
//Above function displays the text message in lower caps

function logWhisper(string)
{
  console.log(whisper(string))
}
//Above function displays the lowercase text previously used

function logShout(string)
{
  console.log(shout(string))
}
//Above function displays the uppercase text previously used

function sayHiToGrandma(string)
{
  if (string == whisper(string))
   {
     return "I can't hear you!"
   }
  else if (string == shout(string))
   {
     return "YES INDEED!"
   }
  else if (string === "I love you, Grandma.")
   {
     return "I love you, too."
   }
}



