function shout(string) {  return string.toUpperCase()}
function whisper(X) {return X.toLowerCase()}
function logShout(hello) {console.log(`${hello}`.toUpperCase())}
function logWhisper(HELLO) {console.log(`${HELLO}`.toLowerCase())}
function sayHiToGrandma(string) {
    if(string===string.toLowerCase()){return `I can't hear you!`}
    else if(string===string.toUpperCase()){return `YES INDEED!`}
    else if(string==='I love you, Grandma.'){return 'I love you, too.'}
  }
