describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
expect(whisper('WINTER')).toEqual('winter')
function whisper(string){
  return string.toLowerCase()
}