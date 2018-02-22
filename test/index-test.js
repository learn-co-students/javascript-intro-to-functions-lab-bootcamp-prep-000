
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('Hello')).toEqual('hello')
  })
})

describe('sayHiToGrandma(string)', function() {
  it('recieves one arguement and returns it with "I cant hear you!"',
  function() {
    expect(sayHiToGrandma('Hello')).toEqual(console.log("I cant hear you!"))
  })
})
 
 describe('sayHiToGrandma(string)', function() {
  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual(console.log("YES INDEED!")) 
})
})
   describe('sayHiToGrandma(string)', function() {
   it('returns "I love you, too" if `string` is "I love you, Grandma"',
    function() {
     expect(sayHiToGrandma('I love you, Grandm')).toEqual(console.log("I love you, too"))
    })
  })