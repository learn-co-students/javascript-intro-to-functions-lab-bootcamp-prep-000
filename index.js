function shout(string){
  return string.toUpperCase();
}
 function whisper(string){
return string.toLowerCase();

 }

 function logShout(string){
  console.log( string.toUpperCase());
 }


 function logWhisper(string){
  console.log( string.toLowerCase());
 }


 function sayHiToGrandma(string){
   var lowercase = string.toLowerCase();
   var uppercase = string.toUpperCase();

   var hearing = "I can\'t hear you!";
   var yes=  "YES INDEED!";
   var love = "I love you, too.";

 var response= "";

   if (string  ===lowercase){
     response =hearing ;

   } else if(string === uppercase){
    response =yes;

  }else if( string === "I love you, Grandma."){
     response= love;
 }
 return response;
 }
