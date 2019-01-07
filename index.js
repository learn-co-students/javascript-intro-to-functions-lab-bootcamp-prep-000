function shout(string){

  return string.toUpperCase();
}

function whisper(string){

  return string.toLowerCase();
}

function logShout(string){
string = 'hello';
  var spy = string.toUpperCase();
  console.log(spy);
}

function logWhisper(string){
string = 'HELLO';
  var spy = string.toLowerCase();
  console.log(spy);
}

function sayHiToGrandma(string){
//  uc = 'HELLO';
//  lc = 'hello';
//  mc = 'I love you, Grandma.';

  if(string.toLowerCase() === string){
    return 'I can\'t hear you!';
  } 

  if (string.toUpperCase() === string) {
    return 'YES INDEED!';
  } 

  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
    
  } 

  }


