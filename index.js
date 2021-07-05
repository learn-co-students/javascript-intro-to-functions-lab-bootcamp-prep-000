function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello')
}
function spy() {
  const spy = spyOn(console, 'log').andCallThroug(
  logShout(hello))

  return string.toUpperCase()
}
