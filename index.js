function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log (`${string.toUpperCase()}`)
}

function logWhisper (string) {
  console.log (`${string.toLowerCase()}`)
}

function sayHiToGrandma (string) {
  if (string === "hello"){
    console.log(string)
    return "I can't hear you!"
  }
  else if (string === "HELLO"){
    console.log(string)
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    console.log(string)
    return "I love you, too."
  }
}
