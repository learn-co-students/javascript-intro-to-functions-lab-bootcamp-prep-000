function shout(string) {return string.toUpperCase()}

function whisper(string) {return string.toLowerCase()}

function logShout(string) {console.log(string.toUpperCase())}

function sayHiToGrandma(string)
   {if string.whisper() === string
      {return "I can't hear you!"}
         else if string.shout() === string
   {return "YES INDEED!"}
      else if string === "I love you, Grandman."
          {return "I love you, too."}}
