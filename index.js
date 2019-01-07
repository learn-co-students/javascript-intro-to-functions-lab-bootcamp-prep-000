function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log('hello')
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  return string.toLowerCase()
  expect(shout('hello')).toEqual('I can\'t hear you!')
}

function sayHiToGrandma(string) {
    return string.toLowerCase("I can\'t hear you!")
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
}