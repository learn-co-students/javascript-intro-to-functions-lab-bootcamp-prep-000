function shout(string) {
  return string.toUpperCase()
}

/*
  I defined the function shout that accepts a string as a parameter, I called this parameter string,
  when the function is called, it returns to us the value of the string in all upcased characters.
*/

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (whisper(string) === string) {
    return "I can't hear you!"
  } else if (shout(string)=== string) {
    return "YES INDEED!"
  } else if (string ==="I love you, Grandma.") {
    return "I love you, too."
  }
}
