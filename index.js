function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var testShout = string.toUpperCase();
  console.log(testShout);
}

function logWhisper(string){
  var testWhisper = string.toLowerCase();
  console.log(testWhisper);
}

function sayHiToGrandma(string){
  var uppercase = string.toUpperCase();
  if (string === 'hello'){
    string = 'I can\'t hear you!';
    // console.log("First Grandma Function is a GO");
    return string;
  }else if (string === uppercase){
    string = 'YES INDEED!';
    // console.log("Second Grandma Function is a GO");
    return string;
  }else{
    string = 'I love you, too.';
    // console.log("Third Grandma Function is a GO");
    return string;
  }
}