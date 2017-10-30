function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  // So right here, we don't want to hardcode "HELLO",
  // We want to use the string variable
  console.log(shout(string))  // <-- makes the string uppercase
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(string) {
  //So now you need to check if the person is whispering
  if(string === whisper(string)){
    return"I can\'t hear you!"  // <-- how do you check if they are whispering?
}
if(string === shout(string)){
  return"YES INDEED!"
}

else if (string === "I love you, Grandma.") {
  return "I love you, too."
}
}
