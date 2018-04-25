function 

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase // true

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase //false

mixedCase.toUpperCase() === mixedCase // false

shout(string) 
{
    return 
    string.toUpperCase() 
  }
    
function sayHiToGrandma(string)
{ 
  if (string === string.toLowerCase())
  { return "I can't hear you!"; 
    
  } if (string === string.toUpperCase() )
  { return "YES INDEED!" 
    
  } if (string === 'I love you, Grandma.'){ return "I love you, too."; 
    
  } return "Are you eating enough?" }