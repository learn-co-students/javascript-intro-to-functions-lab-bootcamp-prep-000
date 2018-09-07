function shout (name){
  return name.toUpperCase()
}

function whisper (name){
  return name.toLowerCase()
}

function logShout (hello){
  console.log(`${"hello"}`.toUpperCase())
}
 
 function logWhisper(hello){
   console.log(`${"hello"}`.toLowerCase())
 }


 function sayHiToGrandma(string){
var loud=string.toUpperCase();
var quiet=string.toLowerCase();
var love="I love you, Grandma.";
   
   if (string===quiet){
     return "I can't hear you!";
   }
    else if(string===loud){
     return "YES INDEED!";
   }
    else if (string===love){
     return "I love you, too.";
   }
 }
 
   
   