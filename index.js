// Returns argument string in uppercase
function shout(string) {
  return string.toUpperCase()
}

// Returns argument string in lowercase
function whisper(string) {
  return string.toLowerCase()
}

// Calls console.log on argument string after converting it to uppercase
function logShout(string) {
  console.log(shout(string))
}

// Calls console.log on argument string after converting it to lowercase
function logWhisper(string) {
  console.log(whisper(string))
}

// Returns a response from Grandma based on user input
function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!"
  } else if (string === shout(string)) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}