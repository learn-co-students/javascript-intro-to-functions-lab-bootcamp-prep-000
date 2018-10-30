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
  var stringTest = "hello";
  var stringTest2 = "HELLO";
  var stringTest3 = "I love you, Grandma.";
  var stringResult = "I can't hear you!";
  var stringResult2 = "YES INDEED!";
  var stringResult3 = "I love you, too.";
  if (string === stringTest)
    return stringResult;
  else if (string === stringTest2)
    return stringResult2;
  else if (string === stringTest3)
    return stringResult3;
}