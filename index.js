function shout(string) {
  return 'hello'.toUpperCase()
}

function whisper(string) {
  return 'hello'.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  switch(string){
    case 'hello'.toLowerCase():
      return "I can't hear you!"
    case 'HEllO'.toUpperCase():
      return "YES INDEED!"
      break;
    case 'I love you, Grandma.':
      return "I love you, too."
      break;
 }
}
