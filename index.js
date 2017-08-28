function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

//All they're asking you to do in the function is just log whatever string they pass in as an argument to the console but in all capital letters.//

function logShout(string) {
  console.log(shout(string))
  }

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string === "i love you, grandma.") {
    return ("I love you, too.")
  } else if (string === "I LOVE YOU, GRANDMA.") {
    return ("I love you, too.")
  } else if (string === whisper(string)) {
    return ("I can\'t hear you!")
  } else if (string === shout(string)){
    return ("YES INDEED!")
  } else if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  }
}

if (whiper(string) === "i love you, grandma.")
  return (I love you, too.)
