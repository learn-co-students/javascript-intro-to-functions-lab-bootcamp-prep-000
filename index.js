//describe('shout(string)', function() {
  //it('receives one argument and returns it in all caps', function() {
    //expect(shout('hello')).toEqual('HELLO')

function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}


//describe('logShout(string)', function() {
  //it('calls console.log() its one argument in all caps', function() {
    //const spy = expect.spyOn(console, 'log').andCallThrough()

    //logShout('hello')

    //expect(spy).toHaveBeenCalledWith('HELLO')

    //console.log.restore()

function logShout(string){

  var spy(console, 'log').andCallThrough()

  logShout('hello')

  console.log.restore() }
