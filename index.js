function shout(hello) {
  return 'hello'.toUpperCase()
}

function whisper(HELLO) {
  return 'HELLO'.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase())

}

function logWhisper(hello) {
  console.log(hello.toLowerCase())
}
function sayHiToGrandma(hello) {
  if (hello.toLowerCase() === hello) {
    return "I can\'t hear you!"
  } if (hello.toUpperCase() === hello) {
    return "YES INDEED!"
  } if (hello === "I love you, Grandma.") {
    return "I love you, too."
  }
}
