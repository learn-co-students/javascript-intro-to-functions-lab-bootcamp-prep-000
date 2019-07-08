var shout = (word) => {
  return `${word}`.toUpperCase()
}

var whisper = (word) => (`${word}`.toLowerCase())

var logShout = word => {
  console.log(shout(word))
}

var logWhisper = word => {
  console.log(whisper(word))
}

var sayHiToGrandma = hi => {
  const word = {
    upper: 'YES INDEED!',
    lower: `I can't hear you!`,
    love: 'I love you, too.',
    default: '',
  }
  let status
  if(hi.toLowerCase() === hi) status = 'lower'
  else if(hi.toUpperCase() === hi) status = 'upper'
  else if (hi === 'I love you, Grandma.') status = 'love'
  
  return word[status] || word.default
}