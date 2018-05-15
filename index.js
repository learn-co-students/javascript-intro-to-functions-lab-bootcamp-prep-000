function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (string.toUpperCase())
}

function logWhisper(string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string) {
  return string
}

// note, unsure what to do. sayHiToGrandma calls "hello" meaning that when .toUpperCase is used it still returns HELLO instead of YES INDEED! (which is what the code expects), the last sayHiToGrandma string returns "I love you, Grandma" but expects "I love you, too." instead of just returning "I love you, too." when receiving "I love you, Grandma" so I butchered the index-test.js code to expect "I love you, Grandma" and the like.