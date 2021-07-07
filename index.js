function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma (aWord) {
  var cantAnswer = "I can't hear you!";
  var yesAnswer = "YES INDEED!";
  var lovAnswer = "I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantAnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesAnswer;
  }
  else if ("I love you, Grandma." === aWord) {
    return lovAnswer
  }
}

