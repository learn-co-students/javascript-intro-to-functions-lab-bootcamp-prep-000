function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var test = "I love you, Grandma.",
      GmaTalk = "YES INDEED!",
      GmaTalk2 = "I can\'t hear you!",
      GmaTalk3 = "I love you, too.";
  var storage = string
  if (string === test) {
    return GmaTalk3
  }
  else if (storage === string.toUpperCase()) {
    return GmaTalk
  } else {
    return GmaTalk2
  }
}
