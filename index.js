//1 shout function returns in all caps
function shout(string) {
  return string.toUpperCase()
}

//2 whisper function returns in all lowercase
function whisper(string) {
  return string.toLowerCase()
}

//3 logShout(string) console.log in all caps
function logShout(string) {
  console.log(string.toUpperCase());
}

//4 logWhisper(strings) console to lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

//5 sayHiToGrandma(string) returns "I can't hear you!" if lowercase
function sayHiToGrandma(string) {
  if (string.toLowerCase()===string) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase()===string) {
    return "YES INDEED!"
  } else if (string==="I love you, Grandma.") {
    return "I love you, too."
  }

}
//6 sayHiToGrandma(string) returns "YES INDEED" if uppercase

//7 sayHiToGrandma(string) returns "I love you too." if "I love you, Grandma."
