function shout(String){
  return String.toUpperCase()
}

function whisper(String){
  return String.toLowerCase()
}

function logShout(String){
  
  console.log(String.toUpperCase)
  logShout('hello')
}


/*
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})*/