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

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    return 'I can\'t hear you!';
  } else if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  }

  if(string === "I love you, Grandma.") {
    return "I love you, too.";
  }

  return "This text should be returned if all the ifs above failed cause this function has to return a string in its decoration";
}
