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

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase();
  var lowercase = string.toLowerCase();
  var love = "I love you, Grandma."
  
  if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === lowercase) {
    return "I can't hear you!"
  } else if (string === love) {
    return "I love you, too."
  }
} 