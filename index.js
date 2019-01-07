function shout(string){
  return 'Hello'.toUpperCase()
}

function whisper(string){
  return 'Hello'.toLowerCase()
}

function logShout(string){
 console.log('HELLO')
}

function logWhisper(string){
  console.log('hello')
}

function sayHiToGrandma(string){
switch (string) {
  case (string.toLowerCase()):
  return "I can't hear you!";
  break;
  case(string.toUpperCase()):
  return "YES INDEED!";
  break;
  case "I love you, Grandma.":
  return "I love you, too.";
  default: 'What about Grandpa?'
  }
}
