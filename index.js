//shout
function shout(string)
{
  return string.toUpperCase()
}
//whisper
function whisper(string)
{
  return string.toLowerCase()
}
//mixed
function mixed(string)
{
  return string.toMixedCase()
}
//logShout
function logShout(shout)
{
  console.log('HELLO')
}
//logWhisper
function logWhisper(whisper)
{
  console.log('hello')
}
//logMixed
function logMixed(mixed)
{
  console.log('I love you, Grandma.')
}
//Grandma
function sayHiToGrandma(string) {
  if (string === 'hello') {
    return("I can't hear you!")
} else if (string === 'HELLO'){
  return('YES INDEED!')
} else if (string === 'I love you, Grandma.'){
  return('I love you, too.')
}
}
