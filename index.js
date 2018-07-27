var greet ;
var gmsg =  "Grandma replies: ";
var smsg =  "Susan Says: ";
var g2msg;
var string;
var testString = "I LOVE YOU GRANDMA.";
var string2 = " "


function shout(string) {
  console.log("doing shout");
  string = string.toUpperCase();
  return  string.toUpperCase();
}

function whisper(string) {
  
  console.log("doing whisper");
  string = string.toLowerCase();
  console.log(string);
  return  string;
}

function logShout(string) {
  string = shout(string)
  console.log(smsg + string);
  console.log( string);
  return string
  
}

function logWhisper(string) {
 string = whisper(string)
   console.log(smsg + string);
   return string
}

function sayHiToGrandma(speech) {
  
  
  if(speech === testString) {
   console.log(smsg + speech );
    console.log( gmsg + "I love you, too." );
    console.log( "I love you, too." );
    return;
  }
  
  else if(speech === speech.toLowerCase() ) {
   /* logWhisper(string);
    logWhisper("hello")*/
    console.log( smsg + speech)
    console.log("test grandma lower case ")
    console.log( gmsg + "I can\'t hear you!" );
     console.log(  "I can\'t hear you!" );
    return ("I can't hear you!");
  }
  else if(speech.toUpperCase() === speech ) {
    logShout(speech);
    logShout("HELLO")
    console.log("testing grandma upper case ")
    console.log( gmsg + "YES INDEED!" );
    console.log( "YES INDEED!" );
    return("YES INDEED!");
  }
  else if(speech === 'Hello') {
    logShout(speech);
    console.log( gmsg + "Hello, Susan." );
    console.log(  "Hello, Susan." );
      console.log(  "Hello." );
    return;
    }
 else  if(speech === "I love you, Grandma.") {
    logShout(speech);
    console.log( gmsg + "I love you, too." );
    console.log(  "I love you, too." );
    return("I love you, too.");
  }
}

greet = "Hello"

    console.log(greet);
     sayHiToGrandma(greet);
    
    
    
    greet = logShout(greet);
    sayHiToGrandma(greet);


    
    greet = logWhisper(greet);
    console.log("Test Grandma")
    console.log(greet)
    sayHiToGrandma(greet);




/*spyOn(consol, 'log');*/
greet = "I love you, Grandma.";
sayHiToGrandma(greet);




