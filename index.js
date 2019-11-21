function shout (hello)
{
  return hello.toUpperCase()
}

function whisper (HELLO)
{
  return HELLO.toLowerCase()
}

function logShout (hello) {
  console.log("HELLO")
}

function logWhisper(HELLO) {
  console.log("hello")
}

function sayHiToGrandma(x) {
  var lowercase = x
  var uppercase = x
  var love = x
  
  if (lowercase.toLowerCase() === lowercase)
  return `I can't hear you!`
  
  if (uppercase.toUpperCase() === uppercase)
  return `YES INDEED!`
  
  if (love === `I love you, Grandma.`)
  return `I love you, too.`
  }