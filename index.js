var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false
function shout(string) {
  return string.toUpperCase()
}
// correct

function whisper(string) {
  return string.toLowerCase()
}
// correct

function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase)
}
// correct

function logWhisper(string){
  lowercase = string.toLowerCase()
  string = uppercase;
  console.log(lowercase)
}
// correct

function sayHiToGrandma(string){
	if (string.toLowerCase() === string){
	  return 'I can\'t hear you!'
	}
	if (string.toUpperCase() === string){
	  return 'YES INDEED!'
	}
	if (string === 'I love you, Grandma.'){
	  return 'I love you, too.'
	}
}
//correct