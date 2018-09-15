
// TESTING
const call = (string) => {
  string.toUpperCase();
}

call('hello world');

const shout = (string) => {
  return string.toUpperCase();
};
shout("Hello world again")


const add = ( a , b) => {
  return a + b
}

add(1,2);

console.log(typeof add()) // undefined


// LAB WORK
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
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  return "Are you eating enough?"
}
