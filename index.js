function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
console.log('hello'.toUpperCase())
}

function logWhisper(string){
console.log('HELLO'.toLowerCase())
}


var uppercase = 'HELLO!';
uppercase.toUpperCase() === uppercase ;
var lowercase = 'hello!';
lowercase.toLowerCase() === lowercase;

function sayHiToGrandma(string) {
  switch(string){
  case "hello":
  return "I can't hear you!";
  case "HELLO":
  return  "YES INDEED!";
  case "I love you, Grandma.":
  return "I love you, too.";
    }
    }
