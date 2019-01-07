function shout(string){
  return string.toUpperCase( )
}
function whisper(string){
  return string.toLowerCase( )
}
function sayHiToGrandma(string){
console.log(`I can't hear you, ${string}`)
return string.toLowerCase()
}
function shout(string){
  return string.toUpperCase()
}
function logShout(string){
  console.log(string.toUpperCase()
  )
}
function logWhisper(string){
  console.log(string.toLowerCase()
  )
}
expect('sayHiToGrandma(string)').toEqual("I can't hear you"
)
function sayHiToGrandma(greeting, firstName) {
  console.log('I was called!')
  return `${greeting}, ${firstName}!`
