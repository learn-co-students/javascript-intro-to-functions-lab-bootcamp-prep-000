function shout(greeting) {
  return greeting.toUpperCase();
}

function whisper(greeting) {
  return greeting.toLowerCase();
}

function logShout(greeting) {
  console.log(greeting.toUpperCase());
}

function logWhisper(greeting) {
  console.log(greeting.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string === string.toLowerCase())
    return "I can\'t hear you!";
  else if(string === string.toUpperCase())
     return "YES INDEED!";
  else if(string === "I love you, Grandma.") 
     return "I love you, too.";
}

// function sayHiToGrandma(string) {
//   if(string === string.toUpperCase())
//     return "YES INDEED!";
// }

// function sayHiToGrandma(string) {
//   if(string === "I love you, Grandma.")
//   return "I love you, too.";
// }