function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var allcaps = "HELLO"
allcaps.toUpperCase() === allcaps
function logShout(string) {
  console.log(allcaps)
  
}

var lowercase = "hello"
allcaps.toLowerCase() === lowercase

function logWhisper(string) {
  console.log(lowercase)
}

/*function sayHiToGrandma(string) { 
  if (string === string.toLowerCase()) { 
    return "I can't hear you!" } 
    
   if (string === string.toUpperCase()) { 
     return "YES INDEED!" } 
     
    if (string == "I love you,Grandma.") {
       return "I love you,too." }
       
  
}*/

/*function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  }*/
  
/*
function sayHiToGrandma(string) { 
if string.toLowerCase()===string{ 
return "I can't hear you!" } 

else if string.toUpperCase()===string{ 
return "YES INDEED!" } 

else if string="I love you,Grandma."{ 
return "I love you,too." } 
else { return 'none' }
*/

function sayHiToGrandma(string) { 
if (string === string.toLowerCase()){ 
return "I can't hear you!" } 

if (string === string.toUpperCase()){ 
return "YES INDEED!" } 

else if (string === "I love you, Grandma."){ 
return "I love you, too."
}
}