function shout(string) {
  return string.toUpperCase();
}
/*shout('philip')*/

function whisper(string) {
  return string.toLowerCase();
}
/*whisper('ALLen')*/

function logShout(string) {
  console.log(string.toUpperCase());
}
/*logShout('wesley')*/

function logWhisper(string) {
  console.log(string.toLowerCase());
}
/*logWhisper('ALLEN') */

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  if (string.toUpperCase() === string){
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
