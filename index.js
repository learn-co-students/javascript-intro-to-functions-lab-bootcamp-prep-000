var uppercase lowercase

function shout(string) {
uppercase = string.toUpperCase();
string = uppercase;
return uppercase;
}

function whisper(string) {
  string = string.toLowerCase();
  string = lowercase;
  return lowercase;
}

function logShout(string){
  string = string.toUppercase();
  string = uppercase;
  return uppercase;
}

function logWhisper(string){
  lowercase = string.toLowerCase()
  string = uppercase;
  console.log(lowercase);
}
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
