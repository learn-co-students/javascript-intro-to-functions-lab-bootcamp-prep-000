function shout(string) {
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

var grandmaCantHear = "I can't hear you!"
var grandmaCanHear = 'YES INDEED!'
var grandmaLovesYou = 'I love you, too.'

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return grandmaCantHear;
  } else if (string === string.toUpperCase()) {
    return grandmaCanHear;
  } else if (string === 'I love you, Grandma.') {
    return grandmaLovesYou;
  }
}
