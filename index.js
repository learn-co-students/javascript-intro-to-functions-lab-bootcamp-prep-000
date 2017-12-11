//function 1
function shout(string) {
  return string.toUpperCase()
}
//function 2
function whisper(string) {
  return string.toLowerCase()
}
//function 3
function logShout(string) {
  console.log(string.toUpperCase())

}
//function 4
function logWhisper(string) {
  console.log(string.toLowerCase())

}
//function 5

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
