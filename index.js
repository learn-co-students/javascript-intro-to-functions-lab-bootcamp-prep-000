function shout(string) {
  return string.toUpperCase()
}
shout('hello')
    
  function whisper(string) {
    return string.toLowerCase()
  }
 whisper('hello')
 
 // 
 describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
}) 
//
function logShout(string) {
  console.log(string.toUpperCase)
}

logShout('hello')