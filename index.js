function shout(string){
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
 //var uppercase = 'HELLO!'
 //var lowercase = 'hello!'
 //var mixedCase = 'I love you, Grandma!'
  
  
  if(string.toUpperCase() === 'HELLO!') {
    return ('YES INDEED!');
  }
  else if (string.toLowerCase() === 'hello!') {
    return ('I can not hear you!');
  }
  else if (string === 'I love you, Grandma!') {
    return ('I love you, too.')
  }
}

logShout('hello');
logWhisper('HELLO');

sayHiToGrandma('HELLO!');
sayHiToGrandma('hello!');
sayHiToGrandma('I love you, Grandma!');

