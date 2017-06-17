let shout = (string) => {
  return string.toUpperCase();
}

let whisper = (string) => {
  return string.toLowerCase();
}

let logShout = (string) => {
  console.log(string.toUpperCase());
}

let logWhisper = (string) => {
  console.log(string.toLowerCase());
}

let sayHiToGrandma = (string) => {
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
