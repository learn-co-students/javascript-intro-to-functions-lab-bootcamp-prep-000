
function shout(x){
  return x.toUpperCase();
}

function whisper(x){
  return x.toLowerCase()
}

function logShout(x){
  console.log(shout(x))
}

function logWhisper(x){
  console.log(whisper(x))
}

function sayHiToGrandma(string){
  let msg;
  if (whisper(string) == string)
    msg= "I can't hear you!";
  else if (shout(string) == string)
   msg = "YES INDEED!"
   else if (string == "I love you, Grandma.")
    msg = string.replace("Grandma","too")
  return msg;
}
