function shout(string){
  
  return string.toUpperCase()
  
}

function whisper(string){
  
  return string.toLowerCase()
  
}

function logWhisper(string){
  
  console.log(string.toLowerCase())
  
}

function sayHiToGrandma(string){
  
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  
  if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}

function logShout(string){
  
  console.log(string.toUpperCase())
  
}
// describe('logShout(string)', function() {
//   it('calls console.log() its one argument in all caps', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough()

//     logShout('hello')

//     expect(spy).toHaveBeenCalledWith('HELLO')

//     console.log.restore()
//   })
// })
