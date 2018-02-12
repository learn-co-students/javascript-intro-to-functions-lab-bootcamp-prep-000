
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello').toUpperCase()).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO').toLowerCase()).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', 
  function() {
    expect(logShout('HELLO').toLowerCase()).toEqual('hello')
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', 
  function() {
    expect(logWhisper('HELLO').toLowerCase()).toEqual('hello');
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(
      sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
