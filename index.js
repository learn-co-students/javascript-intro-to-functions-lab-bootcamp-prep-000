function shout(x) {
  return x.toUpperCase()
}

function whisper(x) {
  return x.toLowerCase()
}

function logShout(x) {
  console.log(x.toUpperCase())
}

function logWhisper(x) {
  console.log(x.toLowerCase())
}

function sayHiToGrandma(x) {
  if (x.toLowerCase() === x) {
    return `I can't hear you!`
    }
    else if (x.toUpperCase() === x) {
      return `YES INDEED!`
    }
    
    else if (x === "I love you, Grandma.") {
      return `I love you, too.`
    }
}