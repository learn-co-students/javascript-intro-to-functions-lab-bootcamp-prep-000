
function shout(string) {
  return string.toUpperCase();
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

function whisper(string){
  return string.toLowerCase();
}


function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."; 
  }
}