function shout(string) {
  return string.toUpperCase()
}

shout('hello')

function whisper(string) {
  return string.toLowerCase()
}

whisper('HELLO')


function logShout(string) {
  string = string.toUpperCase()
  console.log(string)
}

logShout('hello')

logShout

function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can\'t hear you!"
  }
  else if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    console.log("error")
  }
}

sayHiToGrandma("hello")
sayHiToGrandma("HELLO")
sayHiToGrandma("I love you, Grandma.")
sayHiToGrandma('test')


/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})

*/
