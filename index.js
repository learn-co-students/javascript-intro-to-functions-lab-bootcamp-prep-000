function shout(string){
 return string.toUpperCase() 
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  let word = string.toUpperCase()
  console.log(word)
}

function logWhisper(string){
  let word = string.toLowerCase()
  console.log(word)
}

function sayHiToGrandma(string){
  var stringUpperCase = string.toUpperCase()
  var stringLowerCase = string.toLowerCase()
  var iLoveYou = 'I love you, Grandma.'
  if (stringLowerCase === string){ return 'I can\'t hear you!' }
  if (stringUpperCase === string){ return 'YES INDEED!' }
  if (string === iLoveYou){ return 'I love you, too.' }
}
