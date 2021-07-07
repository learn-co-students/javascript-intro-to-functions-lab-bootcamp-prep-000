function shout(string) {
  it('reveives one argument and return it in caps')
  string(shout('hello')).toUpperCase('HELLO!')
}
  function shout(sayHiToGrandma)  {
   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    return(sayHiToGrandma('hello')).toLowerCase("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    return(sayHiToGrandma('HELLO')).toUpperCase("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    return(sayHiToGrandma("I love you, Grandma.")).toUpperCase("I love you, too.")
  })
})