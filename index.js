function shout(sttr){
  return sttr.toUpperCase();
}
function whisper(sttr){
  return sttr.toLowerCase();
}
function logShout(sttr){
if(sttr === sttr.toUpperCase()){
console.log(sttr);
}else{
  console.log(sttr.toUpperCase());
}
}
function logWhisper(sttr){
if(sttr === sttr.toLowerCase()){
  console.log(sttr);
}else{
  console.log(sttr.toLowerCase());
}
}
function sayHiToGrandma(string){
  var str;
if(string.toLowerCase() === string){
  str= "I can't hear you!";
}else {
  if(string.toUpperCase()===string){
    str= "YES INDEED!";
  }else {
    if(string !== string.toUpperCase() || string !== string.toLowerCase()){
      str = "I love you, too.";
    }
  }
}
return str;
}
