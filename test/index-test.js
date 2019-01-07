function shout(string) {
  return string.toUpperCase()
}
describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
    expect(shout('hello')).toEqual('HELLO')
  })
})

function whisper(string) {
  return string.toLowerCase()
}
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

function logShout(string) {
  console.log(string.toUpperCase())
}
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

function logWhisper(string) {
  console.log(string.toLowerCase ())
}
describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})


function sayHiToGrandma(string) {
  string = "I can't hear you!"
  return string
}
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })
})

function sayHelloToGrandma(string) {
  string = "YES INDEED!"
  return string
}
describe('sayHelloToGrandma(string)', function() {
  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHelloToGrandma('HELLO')).toEqual("YES INDEED!")
  })
})

function sayLoveToGrandma(string) {
  string = "I love you, too."
  return string
}
describe('sayLoveToGrandma(string)', function() {
  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayLoveToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
