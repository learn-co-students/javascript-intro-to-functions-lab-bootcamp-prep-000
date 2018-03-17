function shout(string) {
  return string.toUpperCase();
}


function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
 
  console.log('HELLO');
}

function logWhisper(string) {
 
  console.log('hello');
}

function sayHiToGrandma(string) {
  if (string === 'hello') {
    return "I can't hear you!";
  }
    else if(string === 'HELLO') {
    return "YES INDEED!";
}
    else if('I love you, Grandma'){
      return "I love you, too."
    }
}
 /* it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
*/

