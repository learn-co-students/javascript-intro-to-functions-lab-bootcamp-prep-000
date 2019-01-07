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
  var caseString = string,
      ily = "I love you, Grandma.";
  if(caseString.toLowerCase() === string)
    return "I can't hear you!";
  else if (caseString.toUpperCase() === string)
    return "YES INDEED!";
  else if(string === ily)
    return "I love you, too.";
  else
    return "Expected something else";
}
