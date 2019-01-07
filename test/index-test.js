
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('receives its one argument in all caps', function() {
    expect(logShout('hello')).toEqual('HELLO')
  })
})

describe('logWhisper(string)', function() {
  it('receives its one argument in all lowercase', function() {
    expect(logWhisper('HELLO')).toEqual('hello')
  })
})

describe('sayHiToGrandma(string)', function() {
  it( 'receives "i cant hear you" if `string` is lowercase', function() {
    expect(sayHiToGrandma('i cant hear you')).toEqual("i cant hear you")
  })

  it('receives "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('yes indeed')).toEqual("yes indeed")
  })

  it('receives "i love you, too." if `string` is "i love you, grandma."`',
  function() {
    expect(sayHiToGrandma("i love you, too.")).toEqual("i love you, too.")
  })
})
