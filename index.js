// test 1
const shout = string =>{
  return string.toUpperCase();
};

// test 2
const whisper = string =>{
  return string.toLowerCase();
};

// test 3
const logShout = string =>{
  console.log(string.toUpperCase());
};

// test 4
const logWhisper = string =>{
  console.log(string.toLowerCase());
};


const sayHiToGrandma = string =>{
  let smallString = string.toLowerCase()
  let bigString = string.toUpperCase()
  const greeting = "I love you, Grandma."
  if (string === smallString){
    return "I can't hear you!"
  }
  else if(string === bigString){
    return "YES INDEED!"
  }
  else if(string === greeting){
    return "I love you, too."
  }
}

  
