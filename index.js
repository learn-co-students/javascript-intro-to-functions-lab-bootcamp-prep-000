function shout(string) {
  return string.toUpperCase();
}
function whisper(string) { 
return string.toLowerCase();
}
function logShout(string) { 
console.log(string.toUpperCase());
 }
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
 var lowercase = 'hello!';
 var uppercase = 'HELLO!';
 var mixedcase = 'I love you, Grandma!';
 if (sayHiToGrandma === lowercase) {
 console.log('I can\'t hear you!'); }
   else if (sayHiToGrandma === uppercase) {
   console.log('YES INDEED!'); }
      else if (sayHiToGrandma === mixedcase) {
      console.log('I love you, too!'); }
 return;
 }