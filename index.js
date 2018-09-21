// describe('logShout(string)', function() {
//   it('calls console.log() its one argument in all caps', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough()

//     logShout('hello')

//     expect(spy).toHaveBeenCalledWith('HELLO')

//     console.log.restore()
//   })
// })

// describe('logWhisper(string)', function() {
//   it('calls console.log() its one argument in all lowercase', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough()

//     logWhisper('HELLO')

//     expect(spy).toHaveBeenCalledWith('hello')

//     console.log.restore()
//   })
// })

// describe('sayHiToGrandma(string)', function() {
//   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
//   })

//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
//     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
//   })
// })




function shout(string){
 
  return string.toUpperCase()
  
}

function whisper(sound){
  
  return sound.toLowerCase()
}

function logShout(string){
   console.log(string.toUpperCase())
}

function logWhisper(string){
   console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too." 
  } else {
    console.log("Gimme something I can use...")
  }
  
}