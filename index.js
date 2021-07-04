let shout = string => string.toUpperCase();

let whisper = string => string.toLowerCase();

let logShout = string => console.log(shout(string));

let logWhisper = string => console.log(whisper(string));


let sayHiToGrandma = string => {
  let response;
  switch(string) {
    case 'hello':
      response = 'I can\'t hear you!';
      break;
    case 'HELLO':
      response = 'YES INDEED!';
      break;
    case 'I love you, Grandma.':
      response = 'I love you, too.';
      break;
    default:
      response = 'NOT ONE OF THE EXPECTED INPUTS';
      break;
  }
  
  return response;
}