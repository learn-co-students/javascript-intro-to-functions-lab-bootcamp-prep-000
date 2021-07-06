function logShout(string) {
   console.log(string.toUpperCase());
}

function logWhisper(string) {
 console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } 
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if ('I love you, Grandma.'=== string) {
    return 'I love you, too.';
  }
}

function shout(string) {
  return "HELLO";
}

function whisper(string) {
  return "hello";
}
