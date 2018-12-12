function shout(arg) {
  return arg.toUpperCase()
}

function whisper(arg) {
  return arg.toLowerCase()
}

function logShout(arg) {
  console.log(arg.toUpperCase())
}

function logWhisper(arg) {
  console.log(arg.toLowerCase())
}

function sayHiToGrandma(arg) {
  if (arg == arg.toLowerCase()) {
    return "I can't hear you!"
  }
  if (arg == arg.toUpperCase()) {
    return 'YES INDEED!'
  }
  if (arg == 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}

console.log(sayHiToGrandma('hello'))
console.log(sayHiToGrandma('HELLO'))
console.log(sayHiToGrandma('I love you, Grandma.'))
