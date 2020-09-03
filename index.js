function shout(word) {
   return word.toUpperCase() }

function whisper(word){
  return word.toLowerCase()
}

function logShout(word) {
  console.log(shout(word))
}

function logWhisper(word){
  console.log(whisper(word))
}

function sayHiToGrandma(string){
  if (string == string.toLowerCase())
    return "I can't hear you!"
  else if (string == string.toUpperCase())
    return "YES INDEED!"
  else if (string == "I love you, Grandma.")
    return "I love you, too."
}
