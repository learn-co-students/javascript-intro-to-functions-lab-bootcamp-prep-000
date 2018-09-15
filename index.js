<<<<<<< HEAD

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
=======
const shout = (string) => {
  return string.toUpperCase();
}
// shout();

  whisper = (string) => {
  return string.toLowerCase()
  // console.log(string.toLowerCase())
}

// mixedCase return half toLowerCase & half to toUpperCase
function logShout(string) {
    // return string.toLowerCase()
>>>>>>> d83798055b7e729402055fc12e6bda3e6325bc65
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

<<<<<<< HEAD
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
=======

function sayHiToGrandma(string) {
   if(string.toLowerCase() === string) {
    return "I can't hear you!"
    }
  else if (string.toUpperCase() === string)  {
    return "YES INDEED!"
    }
   else if ("I love you, Grandma." === string ) {
    return "I love you, too."
   }
}
  


>>>>>>> d83798055b7e729402055fc12e6bda3e6325bc65
