function shout(string) {
  return string.toUpperCase()
}

function whisper(low) {
  return low.toLowerCase()
}

function logShout(yell) {
  console.log(yell.toUpperCase())
}

function logWhisper(low) {
  console.log(low.toLowerCase())
}

function sayHiToGrandma(greeting) {
  if (greeting === "I love you, Grandma."){
    return "I love you, too."
  } else if (greeting.toLowerCase() === greeting) {
    return "I can\'t hear you!"
  } else if (greeting.toUpperCase() === greeting) {
    return "YES INDEED!"
  }
  }