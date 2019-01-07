function shout(string) {
  /* convert all strings to uppercase letters, then return it */
  return string.toUpperCase()
}

function whisper(string) {
  /* convert all strings to lowercase letters, then return it */
  return string.toLowerCase()
}

function logShout(string) {
  // convert all strings to uppercase letters, then prints it
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  // convert all strings to lowercase letters, then prints it
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {

  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

}
