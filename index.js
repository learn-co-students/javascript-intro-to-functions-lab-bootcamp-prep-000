var shout = (str) => str.toUpperCase();
var whisper = (str) => str.toLowerCase();
var logShout = (str) => {console.log(shout(str))};
var logWhisper = (str) => {console.log(whisper(str))};
var sayHiToGrandma = (str) => str==whisper(str)?"I can't hear you!":str==shout(str)?"YES INDEED!":str=="I love you, Grandma."?"I love you, too.":'';
