function shout(String){
  return String.toUpperCase()
}
  function whisper(String){
    return String.toLowerCase()
  }
    function logShout(String){
       console.log(String.toUpperCase())
    }
      function logWhisper(string){
        console.log(string.toLowerCase())
      }
        function sayHiToGrandma(string) {
          var word = string
            if (word.toLowerCase() === word)
              return('I can\'t hear you!')
                else if(word.toUpperCase() === word)
                  return('YES INDEED!')
                    else  if(word === 'I love you, Grandma.')
                      return('I love you, too.')
        }