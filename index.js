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
//RETURNS
function whisper(string) {
  return string.toLowerCase()
}

const shout = (string) => {
  return string.toUpperCase();
}
// shout();

  whisper = (string) => {
  return string.toLowerCase()
  // console.log(string.toLowerCase())
}

// mixedCase return half toLowerCase & half to toUpperCase
 //LOGS OUT
function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}


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
