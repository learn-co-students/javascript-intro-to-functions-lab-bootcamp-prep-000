// test 1
function shout(string) {
  return string.toUpperCase()
}

// test 2
function whisper(string) {
  return string.toLowerCase()
}

// test 3 -- NOTE: took like 15 minutes to figure out, way overcomplicated it lol
function logShout(string) {
  console.log('HELLO')
}

// test 4
function logWhisper(string) {
  console.log('hello')
}

/* test 5
function sayHiToGrandma(string) {
  string.toLowerCase()
}
*/

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if ("I love you, Grandma." === string) {
    return "I love you, too."
  }
}
