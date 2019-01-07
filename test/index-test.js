
describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', () => {
  it('receives one argument and returns it in all lowercase', () => {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', () => {
  it('calls console.log() its one argument in all caps', () => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', () => {
  it('calls console.log() its one argument in all lowercase', () => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', () => {
  it('returns "I can\'t hear you!" if `string` is lowercase', () => {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', () => {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', () => {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
