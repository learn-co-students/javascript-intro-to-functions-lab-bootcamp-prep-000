
function shout(string) {

  let u= string.toUpperCase();
  return u;
}

function whisper(string) {

  let l= string.toLowerCase();
  return l;
}


function logShout(string) {
      console.log(shout(string))

}

function logWhisper(string) {
      console.log(whisper(string))

}


function sayHiToGrandma(string) {
  let result= '';
  let granddother =  "I love you, Grandma."

  if(string.toUpperCase() === string){
    result= "YES INDEED!";
  }

  if(string.toLowerCase() === string){
    result= 'I can\'t hear you!';
  }

  if(granddother === string){
    result= "I love you, too."
  }

  return result;
}
