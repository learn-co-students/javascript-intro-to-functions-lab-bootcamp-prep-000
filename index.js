let shout = arg => arg.toUpperCase()
let whisper = arg => arg.toLowerCase()
let logShout = arg => console.log(shout(arg))
let logWhisper = arg => console.log(whisper(arg))
let sayHiToGrandma = arg => {
  let xs = [
    `I can't hear you!`,
    `YES INDEED!`,
    `I love you, too.`
  ]
  if( arg === 'I love you, Grandma.') return xs[2]
  if( arg === shout(arg)) return xs[1]
  if( arg === whisper(arg)) return xs[0]
  return undefined
}
