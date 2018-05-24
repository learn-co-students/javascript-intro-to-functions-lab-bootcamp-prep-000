
function shout(string)
{
  'Hello!'.toUpperCase()
  return string.toUpperCase()
}

function whisper(string)
{
  'HELLO!'.toLowerCase()
  return string.toLowerCase()
}

function logShout(string)
{
  "Hello!".toUpperCase()
  console.log(string.toUpperCase())
}
function logWhisper(string)
{
  "Hello!".toLowerCase()
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string)
{
 if(string === string.toLowerCase())
 {
   return "I can't hear you!";
 }
 else if (string === string.toUpperCase())
 {
   return "YES INDEED!"
 }
 else if ( string === "I love you, Grandma")
 {
   return "I love you, too."
 }

 }