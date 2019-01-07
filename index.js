function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {

console.log(string) {
  const spy = expect.spyOn(console, 'log').andCallThrough()

logShout('hello')

expect(spy).toHaveBeenCalledWith('HELLO')
  }
}
