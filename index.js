
//1

function shout(string) {
  return (string).toUpperCase();
}

//2

function whisper(string) {
  return string.toLowerCase();
}

//3

function logShout(string) {
  console.log(string.toUpperCase());
}

//4

function logWhisper(string) {
  console.log(string.toLowerCase());
}

//5

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase();
  var grandmaLove = "I love you, Grandma.";
  if (string === grandmaLove) {
    return "I love you, too.";
  } else if (string !== upperCase) {
    return "I can't hear you!";
  } else {
    return "YES INDEED!";
  }
  }
