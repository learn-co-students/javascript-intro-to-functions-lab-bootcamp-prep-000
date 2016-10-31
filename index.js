function shout (string) {
  return string.toUpperCase();
}
shout('hello');

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.') {
    return "I love you, too.";
  } else if (string !== string.toUpperCase()){
    return 'I can\'t hear you!';
  } else {
    return "YES INDEED!";
  }
}
