describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
  })
})
expect(shout('hello')).toEqual('HELLO')
function shout(string){
  return string.toUpperCase()
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
expect(whisper('WINTER')).toEqual('winter')
function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
console.log (string.toUpperCase())
}

function logWhisper(string){
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string){
var test = string.toLowerCase()
var message = "I can't hear you!"
var back = "I love you, Grandma."
if (string === test){
  return message
} else if (string === string.toUpperCase()){
   return "YES INDEED!"
} else if (string === back) {
  return "I love you, too."
}
}
