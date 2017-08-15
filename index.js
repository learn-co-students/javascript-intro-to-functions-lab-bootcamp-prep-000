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
  var case1 = "I can't hear you!"
  var case2 = "YES INDEED!"
  var case3 = "I love you, too."

  if (string.toLowerCase() === string) {
    return case1
  }else if (string.toUpperCase() === string) {
    return case2
  }else if (string.toLowerCase() != string && string.toUpperCase() != string) {
    return case3
  }
}
