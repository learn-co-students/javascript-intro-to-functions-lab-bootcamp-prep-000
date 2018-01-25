function shout(string) {
 return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var uppercase = string
  var lowercase = string
  
  var phrase = 'I love you, Grandma.'
  if (string === phrase) {
   return 'I love you, too.';
  }
  if (lowercase === lowercase.toLowerCase()) {
    return "I can't hear you!";
  }
  if (uppercase === uppercase.toUpperCase()) {
    return 'YES INDEED!';
}

}