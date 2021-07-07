function shout(string){
  return string.toUpperCase('hello')
}

function whisper(string){
  return string.toLowerCase('HELLO')
}

function logShout(string){
  string = "hello";
  console.log(string.toUpperCase());
}

function logWhisper(string){
  logWhisper = "HELLO"
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string.toLowerCase("hello") === string){
    return 'I can\'t hear you!';
  }
  if (string.toUpperCase("HELLO") === string){
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }
}