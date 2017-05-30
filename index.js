// function say(greeting, name) {
//   console.log('I was called!')
//   return `${greeting}, ${name}!`
// }


function shout(string) {
  logShout()
  return string.toUpperCase()
}

function logShout() {
console.log("HELLO")
}

function whisper(string) {
  logWhisper()
  return string.toLowerCase()
}

function logWhisper() {
  console.log("hello")
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
     return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
      return "YES INDEED!"
  } else {
      return "I love you, too."
    }
}
