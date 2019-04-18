function shout(string) {return string.toUpperCase()}

function whisper(string) {return string.toLowerCase()}

function logShout(string) {return console.log(string.toUpperCase())}

function logWhisper(string) {return console.log(string.toLowerCase())}

function sayHiToGrandma(string)
{
  var hello = "hello"
  var love = "I love you, Grandma."
  var response
  if (string === hello) {response = "I can't hear you!";}
  
  else if (string === hello.toUpperCase()) {response = "YES INDEED!";}
  
  else if (string === love) {response = "I love you, too.";}
  
  return response}
  

