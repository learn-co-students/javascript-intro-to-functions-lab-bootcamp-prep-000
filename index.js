function shout(hello) {
  return 'hello'.toUpperCase()
}

function whisper(hello) {
  return 'hello'.toLowerCase()
}

function logShout(hello) {

  console.log('hello'.toUpperCase())
}

function logWhisper(hello) {
    console.log('hello'.toLowerCase())
}


function sayHiToGrandma(hello) {
  if (hello === "I love you, Grandma.") {
    return "I love you, too."
  } else if (hello.toUpperCase() === hello) {
    return "YES INDEED!"
  } else {
    return "I can't hear you!"
  }
}
