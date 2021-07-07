function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(hello) {
  console.log('HELLO')
  return hello.toUpperCase();
}
logShout(hello)

function logWhisper(hello) {
  console.log('hello')
  return hello.toLowerCase();
}
logWhisper(hello)




function sayHiToGrandma(string){
    if (string.toLowerCase() === string){
      return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
    }
}



