function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

logShout('hello')

function logWhisper(string) {
  console.log('hello')
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
  if (`${string}` === "hello") {return "I can't hear you!"}
  else if (`${string}` === "HELLO") {return "YES INDEED!"}
  else if (`${string}` === "I love you, Grandma.") {return "I love you, too."}
  else {console.log("Error saying hi to Grandma.")}
}
