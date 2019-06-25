function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
var ifLow = "I can\'t hear you!";
var ifUp = "YES INDEED!";
var ifLove = "I love you, too.";

if (string.toLowerCase(string) === string) {

return ifLow;

} else if (string.toUpperCase(string) === string) {
  
  return ifUp;

  
} else if (string === "I love you, Grandma.") {
  
  return ifLove;
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
}) */