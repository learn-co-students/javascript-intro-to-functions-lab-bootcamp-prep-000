
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = 'HELLO'
  uppercase.toUpperCase() === uppercase // true
  console.log(uppercase)
}

function logWhisper(string) {
  var lowercase = 'hello'
  lowercase.toLowerCase() === lowercase // true
  console.log(lowercase)
}

function sayHiToGrandma(string) {

  if (string === 'hello') {
    return `I can't hear you!`
  } else if (string === "HELLO") {
    return `YES INDEED!`
  } else if (string === "I love you, Grandma.") {
    return `I love you, too.`
  }

}
