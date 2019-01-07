function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string)
{
  var uppercase = "HELLO"
  uppercase.toUpperCase() === uppercase
  console.log(uppercase)
}

function logWhisper(string) {
  var lowercase = "hello"
  lowercase.toLowerCase() === lowercase
  console.log(lowercase)
}

function sayHiToGrandma(string) {
  var lowercase = "hello"
  var uppercase = "HELLO"
  var mixedCase = "I love you, Grandma!"

  switch (string) {
    case lowercase:
      return "I can\'t hear you!"
      break;
    case uppercase:
      return "YES INDEED!"
      break;
    default:
      return "I love you, too."
  }
}
