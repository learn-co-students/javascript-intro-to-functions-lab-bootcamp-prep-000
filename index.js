// describe('shout(string)', function() {
//   it('receives one argument and returns it in all caps', function() {
//     expect(shout('hello')).toEqual('HELLO')
//   })
// })

function shout (string) {
  return string.toUpperCase()
}

// describe('whisper(string)', function() {
//   it('receives one argument and returns it in all lowercase', function() {
//     expect(whisper('HELLO')).toEqual('hello')
//   })
// })

function whisper (string) {
  return string.toLowerCase()
}

// describe('logShout(string)', function() {
//   it('calls console.log() its one argument in all caps', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough()
//
//     logShout('hello')
//
//     expect(spy).toHaveBeenCalledWith('HELLO')
//
//     console.log.restore()
//   })
// })



function spy (logShout) {
  function logShout(string) {
    console.log(string.toUpperCase)
  }
  return logShout.andCallThrough()
}

spy(logShout('hello'))
console.log.restore()
