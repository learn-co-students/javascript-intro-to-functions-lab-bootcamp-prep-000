
describe('shout(string)', 
function shout(string){
string.toUpperCase();
}

function 'shout(string)'{
  string.toEqualto('HELLO'); 
})


describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
function shout(string) {
  return string
}

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})


expect(shout('hello')).toEqual('HELLO')
describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
describe('logWhisper(string)', function() {
function('sayHiToGrandma()'){
  logWhisper = ('sayHiToGrandma')
    expect(logWhisper)toEqualto('Hi There!');
  console.log.restore()}
} 

console.log(sayHiToGrandma)

describe('sayHiToGrandma(string)', function() {
  it('returns "I can't hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")



  })
})

