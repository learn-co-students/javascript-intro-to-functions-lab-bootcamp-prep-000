function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(`${string}`))
}

function logWhisper(string) {
  console.log(whisper(`${string}`))
}

function sayHiToGrandma(string) {
  var lowercase = `${string}`
  if(lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  } else if (lowercase.toUpperCase() === lowercase) {
    return "YES INDEED!"
  } else if (`${string}` === "I love you, Grandma.") {
    return "I love you, too."
  }
}



