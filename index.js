var volume = 'HeLlO'
console.log(volume)

function shout(string){
  return string.toUpperCase()
}
volume = shout(volume)
console.log(volume)

function whisper (string){
  return string.toLowerCase()
}
volume = whisper(volume)
console.log(volume)

function logShout(string){
  console.log(string.toUpperCase())
}
logShout(volume)

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper(volume)

function sayHiToGrandma (string){
      if (string.toLowerCase() === string) {
        return "I can't hear you!";
    }
      else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    }
      else if (string === "I love you, Grandma.") {
        return "I love you, too.";
      }
      else {
        console.log ("fuck")
      }
  }

sayHiToGrandma("hello")
console.log()
