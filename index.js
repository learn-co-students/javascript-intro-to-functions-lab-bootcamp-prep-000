function shout(String){return String.toUpperCase()}
function whisper(String){return String.toLowerCase()}
function logShout(string){console.log(string.toUpperCase());}
function logWhisper(string){console.log(string.toLowerCase());}
function sayHiToGrandma (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesIndeed ="YES INDEED!";
  var loveYou ="I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) return cantUnswer;
  if (aWord.toUpperCase(aWord)===aWord) return yesIndeed;
  if (aWord==="I love you, Grandma.") return loveYou;
}


//function sayHiToGrandma (string) {
 // var cantUnswer = "I can't hear you!";
 // if (string.toLowerCase(string) === string) return cantUnswer; }
 // {
 // var yesIndeed= "yes Indeed! "; if (string.toUpperCase(string) === string) return yesIndeed;
//}



