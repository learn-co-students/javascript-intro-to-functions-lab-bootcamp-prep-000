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
  var hello = "hello"
  if (string === hello.toLowerCase()) {
    return "I can't hear you!"
  }
  else if (string === hello.toUpperCase()) {
    return "YES INDEED!"
  }
  else /* if (string == "I love you, Grandma.") */ {
    return "I love you, too."
  }
}
