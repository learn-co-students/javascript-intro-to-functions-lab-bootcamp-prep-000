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
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = 'Hi there!'
  // mixedCase.toLowerCase() === mixedCase // false
  // mixedCase.toUpperCase() === mixedCase
  // Check ---if--- string is lower, upper, or 'I love you, Grandma'
  if ( lowercase.toLowerCase() === lowercase) {
    return "I can\'t hear you!";
  }
  else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  }
  else if (string == "I love you, Grandma.") {
    return "I love you, too.";
  }
}
