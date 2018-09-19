var uppercase, lowercase

function shout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase
}

function whisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase
}

function logShout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  console.log(uppercase);
}

function logWhisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase) {
    return 'I can\'t hear you!';
  }
  if (string === string.toUpperCase) {
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
