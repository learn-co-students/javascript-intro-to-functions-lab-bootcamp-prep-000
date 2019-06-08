var uppercase = 'Hello!'
var lowercase = 'hello!'
function shout(uppercase){
  
  return uppercase.toUpperCase()
}

function whisper(lowercase){
  return lowercase.toLowerCase()
}
function logShout(lowercase){
  console.log(lowercase.toUpperCase())
}
function logWhisper(uppercase){
  console.log(uppercase.toLowerCase())
}
function sayHiToGrandma(lowercase){
  if(lowercase.toLowerCase()===lowercase)
  return 'I can\'t hear you!'
  if(uppercase.toUpperCase===uppercase)
  return  'YES INDEED!'
}