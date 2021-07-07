function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string));
  return shout(string);
}

function logWhisper(string) {
  console.log(whisper(string));
  return whisper(string);
}

function sayHiToGrandma(string) {
  var uppercase = shout(string)
  var lowercase = whisper(string)
  
  if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === lowercase) {
    return "I can't hear you!"
  }
  
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}