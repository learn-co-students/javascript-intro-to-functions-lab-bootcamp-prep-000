// Test 1 
function shout(string) {
  return string.toUpperCase() 
}

//Test2
function whisper(string) {
  return string.toLowerCase()
}

//Test3

function logShout(string) {
  var capComment = string.toUpperCase()
  return console.log(capComment)
}

//Test4

function logWhisper(string) {
  var lowercaseComment = string.toLowerCase()
  return console.log(lowercaseComment)
}

//Test567

function sayHiToGrandma(string) {
  var softGreeting = string.toLowerCase()
  var loudGreeting = string.toUpperCase()
  
  if (softGreeting === string) {
    return "I can\'t hear you!" 
  } else if (loudGreeting === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}

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

/*
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
}) 
*/