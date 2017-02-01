function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) { console.log(string.toUpperCase()) }

function logWhisper(string) { console.log(string.toLowerCase()) }

function sayHiToGrandma(string) {

  var uppercase = "HELLO!"

  if (uppercase.toUpperCase() === uppercase) {return "Yes Indeed!"} // true

  var lowercase = 'hello!'

  if (lowercase.toLowerCase() === lowercase) {return "I can\'t hear you!"}// true 

  var mixedCase = 'Hi there!'

  mixedCase.toLowerCase() === mixedCase // false

  mixedCase.toUpperCase() === mixedCase // false

  else if (string==="I love you, Grandma.") {return "I love you, too."}
}
