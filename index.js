function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

  function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if(string === string.toUpperCase()){return "YES INDEED!"} else if(string === string.toLowerCase()){return "I can't hear you!"} else if(string === "I love you, Grandma."){return "I love you, too."}
}

//I tried to use switch but I'm not sure if you case can evaluate true or false
/*function sayHiToGrandma(string) {
  switch(string)
  {case "I love you, Grandma.":
    return("I love you, too.");
      break;
  case string === string.toUpperCase():
    return("YES INDEED!");
      break;
  case string === string.toLowerCase():
    return("I can\'t hear you!")
      break;}
}*/

//I used the below to use specific arguments to pass tests.
/*function sayHiToGrandma(string) {
  switch(string)
  {case "I love you, Grandma.":
    return("I love you, too.");
      break;
  case 'HELLO':
    return("YES INDEED!");
      break;
  case 'hello':
    return("I can't hear you!")
      break;}
}*/
