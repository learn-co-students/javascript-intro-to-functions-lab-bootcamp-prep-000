function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

/* function sayHiToGrandma(string) {

  if (string === some value) {
    //do something
      }
    if (string === some other value) {
      //do something else
        }
      }*/

function sayHiToGrandma(string) {

  if (string === string.toLowerCase()) {
  return ("I can't hear you!")
    }
    if (string === string.toUpperCase()) {
    return ("YES INDEED!")
    }
      if (string === "I love you, Grandma.") {
      return ("I love you, too.")
      }
    }
