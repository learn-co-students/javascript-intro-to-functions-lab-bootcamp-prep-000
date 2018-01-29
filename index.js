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
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = 'I love you, Grandma.'
  
  
  if(uppercase.toUpperCase() === uppercase) {
    console.log('YES INDEED!');
  }
  else if(lowercase.toLowerCase() === lowercase) {
    console.log("I can't hear you!");
  }
  else if(mixedCase) {
    console.log('I love you, too.')
  }
}

logShout('hello');
logWhisper('HELLO');

sayHiToGrandma('hello!');

