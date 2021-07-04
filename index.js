var string = "string"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

/* function sayHiToGrandma(string) {
  if(`${string}`) === (`hello`)
  return string("I can't hear you!")

  if(`${string}`) === (`HELLO`)
  return string("YES INDEED!")

  if(`${string}`) === (`I love you, Grandma.`)
  return string ("I love you, too.")

  else {
    return string("Can you repeat that, please?")
  }
}
