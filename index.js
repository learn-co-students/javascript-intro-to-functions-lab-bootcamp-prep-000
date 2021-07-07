function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(shout(string))
}
function logWhisper(string){
  console.log(whisper(string))
}

/*
Testing: The following shows us how to test whether a string is all caps or all lower case. 
*/

var uppercase = "HELLO!"
uppercase.toUpperCase()===uppercase

var lowercase = 'hello!'
lowercase.toLowerCase()===lowercase

var mixedCase = 'Hi there!'
mixedCase.toUpperCase()===mixedCase
mixedCase.toLowerCase()===mixedCase

var information;

function sayHiToGrandma(information,uppercase,lowercase,mixedCase){
  
if(information.toLowerCase()===information){
    return "I can't hear you!"}

else if(information.toUpperCase()===information){
    return 'YES INDEED!'}

else if(information==="I love you, Grandma."){
    return "I love you, too."}
}

