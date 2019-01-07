function shout(string) {
  return string.toUpperCase ();
};

function whisper(string) {
  return string.toLowerCase ();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma (string) {
  var lowerCase = string.toLowerCase();
  var upperCase = string.toUpperCase();
  var love = 'I love you, Grandma.';

  if (string === lowerCase) {
    return `I can\'t hear you!`
  } else if (string === upperCase) {
    return `YES INDEED!`
  } else if (string === love) {
    return `I love you, too.`;
  };
}
