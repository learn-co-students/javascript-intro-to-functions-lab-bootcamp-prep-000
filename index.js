const shout=(string)=>{
  return string.toUpperCase()
};

const whisper=(string)=>{
  return string.toLowerCase()
};

const logShout=(string)=>{
  console.log('hello'.toUpperCase())
};


const logWhisper=(string)=>{
  console.log("HELLO".toLowerCase())
};


const sayHiToGrandma=(string)=>{
  if(string==="I love you, Grandma."){
    return "I love you, too."
  }else if (string===string.toUpperCase()){
    return "YES INDEED!"
  } else if (string===string.toLowerCase()){
    return "I can't hear you!"
  }

};
