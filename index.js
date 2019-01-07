const shout=(word)=>word.toUpperCase();
const whisper=(word)=>word.toLowerCase();
const logShout=(word)=>console.log(shout(word));
const logWhisper=(word)=>console.log(whisper(word));
const sayHiToGrandma=(sentence)=>{
  if (sentence == sentence.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (sentence == sentence.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (sentence == "I love you, Grandma.") {
    return "I love you, too."
  }
}


/* function shoutString(word) {
    return word.toUpperCase();
} */
