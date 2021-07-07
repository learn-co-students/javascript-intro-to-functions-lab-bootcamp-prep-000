function shout(string) {
  return string.toUpperCase();
}

function whisper (aWord) {
  return aWord.toLowerCase( );
}

function logShout(strings) {
  console.log( strings.toUpperCase());
}

function logWhisper(strings) {
  console.log( strings.toLowerCase());
}

function sayHiToGrandma (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantUnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === aWord) {
    return lovUnswer
  }
}