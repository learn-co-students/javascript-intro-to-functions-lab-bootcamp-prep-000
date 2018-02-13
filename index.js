describe('shout(string)', ()=> { 
})
function shout(string){
  return string.toUpperCase() 
  }
describe('whisper(string)', ()=> { 
})
function whisper(string){
  return string.toLowerCase() 
  }
describe('logShout(string)' , ()=>{
})
function logShout(string){ 
console.log (string.toUpperCase())
}
describe ('logWhisper(string)', () => {
})
function logWhisper(string){
  console.log (string.toLowerCase())
}
describe('sayHiToGrandma(string)', () => {
})
function sayHiToGrandma(string){
  var uppercase = 'HELLO';
  var lowercase = 'hello';
  var loveYou = 'I love you, Grandma.'
  if (string===uppercase) {
    return "YES INDEED!" 
  }
  if (string===lowercase) {
    return "I can\'t hear you!"  
  }
   else {
    return "I love you, too." 
   }
}
