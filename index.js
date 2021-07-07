function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase())
}

function logWhisper(HELLO) {
  console.log(HELLO.toLowerCase())
}

function sayHiToGrandma (hello) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (hello.toLowerCase(hello) === hello) {
    return cantUnswer;
  }
  else if (hello.toUpperCase(hello) === hello) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === hello) {
    return lovUnswer
  }
}
