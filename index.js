function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(string) {
  // string value is 'HELLO'
  // whisper(string) value is 'hello'
  // the only falsey values in javascript are null, undefined, false, and 0
  // every other value is truthy meaning in an if / else if scenario if you had
  // if('HELLO') this will always run true because a string is a truthy value
  if (whisper(string) === string) {
    return "I can't hear you!"
  } else if (shout(string) === string) {
    return "YES INDEED!"
  } else if ("I love you, Grandma." === string) {
    return "I love you, too."
  }
}
