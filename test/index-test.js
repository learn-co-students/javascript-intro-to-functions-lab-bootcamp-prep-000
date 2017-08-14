
describe('shout(string)', function shout (string) {
  it('receives one argument and returns it in all caps', function() {
     return string
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function whisper (string) {
  it('receives one argument and returns it in all lowercase', function() {
    return string
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function logShout (string) {
  it('calls console.log() its one argument in all caps', function() {
    return string
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function logWhisper (string) {
  it('calls console.log() its one argument in all lowercase', function() {
    return string
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function sayHiToGrandma (string) {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    return string
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")

  })

  it('returns "YES INDEED!" if `string` is uppercase', function uppercase() {
    var uppercase = 'YES INDEED!'
      return string
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function IloveyouGrandma() {
    var IloveyouGrandma = 'I love you, too.'
    return string
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
