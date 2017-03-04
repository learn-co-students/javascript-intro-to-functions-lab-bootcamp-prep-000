var shout = (s) => s.toLocaleUpperCase();
var whisper = (s) => s.toLocaleLowerCase();

var logShout = (s) => console.log(shout(s));
var logWhisper = (s) => console.log(whisper(s));

function sayHiToGrandma(s) {
  return s === shout(s) ? 'YES INDEED!'
       : s === whisper(s) ? "I can't hear you!"
       : s === 'I love you, Grandma.' ? 'I love you, too.'
       : undefined;
}