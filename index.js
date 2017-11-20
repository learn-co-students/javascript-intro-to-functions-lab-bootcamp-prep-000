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

function logShout(String){
  var case = string.toUpperCase
console.log  (case)
}
