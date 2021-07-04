// # 1)
  function shout(string) {
    return string.toUpperCase()
   }
// # 2)
  function logShout(string) {
    // return string.toUpperCase()
       console.log(string.toUpperCase())
     }
//console.log(string.toUpperCase())
//# 3)
  function logWhisper(string) {
   console.log(string.toLowerCase());

    //   return string.toLowerCase()

    }
    // # 3)
function whisper(string) {
     return string.toLowerCase()
  //   console.log('hello');
  }


//# 4)sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."
      function sayHiToGrandma(string) {

        if  (string === string.toLowerCase()){
          return  "I can't hear you!"
        }
   //console.log('I can\'t hear you!')

   if (string === string.toUpperCase()){
      return  "YES INDEED!"
        }
      else {
        string = "I love you, Grandma.";
      return "I love you, too."
      }
        }

  //  console.log('YES INDEED!')
    // return  "YES INDEED!"
