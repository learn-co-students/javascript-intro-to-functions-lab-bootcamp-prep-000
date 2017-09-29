function shout (string){
  return string.toUpperCase()
}

function whisper (string){
  return string.toLowerCase()
}
function logShout (string) {
  console.log('string'.toUpperCase())
console.log('Hello'.toUpperCase())
}
function logWhisper (string) {
  console.log('string'.toLowerCase())
console.log('hello'.toLowerCase())
}

function sayHiToGrandma (string) {
  if (string==='hello'.toLowerCase())
  {return 'I can\'t hear you!'}
  else if (string==='HELLO'.toUpperCase())
  {return 'YES INDEED!'}
  else (string==='I love you, Granma.')
  {return 'I love you, too.'}
}
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma("I love you, Grandma.")
