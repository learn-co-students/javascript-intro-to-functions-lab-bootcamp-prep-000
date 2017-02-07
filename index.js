function shout(string){
  return string.toUpperCase()
} //changes string to uppercase
function whisper(string){
  return string.toLowerCase()
}//changes string to lowercase
function logShout(string){
  console.log(string.toUpperCase())
}//logs string as uppercase
function logWhisper(string){
  console.log(string.toLowerCase())
}//logs string as lowercase
function sayHiToGrandma(string){
var lowercase = "hello"//lowercase comparison string
var uppercase = "HELLO"//uppercase comparison string
var GmaLove = "I love you, Grandma."//love Grandma comparison string

if (string === lowercase)
  return "I can't hear you!" //lowercase return
if (string == uppercase)
    return "YES INDEED!"//uppercase return
if (string === GmaLove)
    return "I love you, too."//Love Grandma return
    /**
    Not sure if I should be checking cases for these or ok to return as is. 
    **/
}