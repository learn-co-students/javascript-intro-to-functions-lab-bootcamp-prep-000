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
 console.log('HELLO'); string.toUpperCase() 
 
}
function logWhisper(string) 
{
 console.log('hello'); string.toLowerCase() 
}

function sayHiToGrandma(string) 
{
 var lowercase = 'hello' 
 var uppercase = 'HELLO'
 var mixedCase = "I love you, Grandma." 
 if ((string===lowercase)) 
 return "I can't hear you!";
  else
 if ((string===uppercase)) 
 return "YES INDEED!"
  else
 if ((string===mixedCase))
 return "I love you, too."


 
}
