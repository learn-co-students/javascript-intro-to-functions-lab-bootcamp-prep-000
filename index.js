function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var str = string.toUpperCase();
  console.log(str);
}

function logWhisper(string) {
  var str = string.toLowerCase();
  console.log(str);
}

function sayHiToGrandma(string) {
  var str = string;

  if (str.toLowerCase() === str)
    return `I can't hear you!`

  if (str.toUpperCase() === str)
    return `YES INDEED!`

  if (str === `I love you, Grandma.`)
    return `I love you, too.`
}
