function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const uppercase = string.toUpperCase();
  console.log(uppercase);
}

function logWhisper(string) {
  const lowercase = string.toLowerCase();
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  var loveyou = "I love you, Grandma."
  
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string === loveyou) {
    return "I love you, too.";
  }
}