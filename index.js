describe(’shout(string)’,()  =>{...}) function shout (string) { 
   return string.toUpperCase()
}
var uppercase= “HELLO!”

uppercase.toUpperCase() === uppercase
//true

var lowercase = ‘hello!’

lowercase.toLowerCase() === lowercase
//true

mixedCase.toLowerCase() === mixedCase
//false

mixedCase.toUpperCase() === mixedCase //false