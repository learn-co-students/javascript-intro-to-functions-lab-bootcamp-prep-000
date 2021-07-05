/* 
1. Declare a function named shout
2. Function accepts parameter named string, whose value is string.
3. When call function, return string with ALL letters in uppercase.
*/
function shout(string) {
  return string.toUpperCase()
}

/* 
1. Declare a function named whisper.
2. Function accepts parameter named string, whose value is string.
3. When call function, return string with ALL letters in lowercase.
*/
function whisper(string) {
  return string.toLowerCase()
}

/* 
1. Declare a function named shout logShout.
2. Function accepts parameter named string, whose value is string.
3. When call function, log HELLO in console.
*/
function logShout(string) {
  console.log('HELLO')
}

/* 
1. Declare a function named shout logWhisper.
2. Function accepts parameter named string, whose value is string.
3. When call function, log hello in console.
*/
function logWhisper(string) {
  console.log('hello')
}

/* 
1. Declare a function named sayHiToGrandma.
2. Function accepts parameter named string, whose value is string.
3. When call function, return "I can't hear you!" if string is in lower case.
*/
function sayHiToGrandma(string) {
  string.toLowerCase () === string
  return "I can't hear you!"
  }

/* 
1. Declare a function named sayHiToGrandma.
2. Function accepts parameter named string, whose value is string.
3. When call function, return "YES INDEED!" if string is in upper case.
4. When call function, else return "I can't hear you!" if string is in lower case.
*/
function sayHiToGrandma(string) {
  if (string.toUpperCase () === string)
  return "YES INDEED!"
  else if (string.toLowerCase () === string)
  return "I can't hear you!"
  }

/* 
1. Declare a function named sayHiToGrandma.
2. Function accepts parameter named string, whose value is string.
3. When call function, return "I love you, Grandma." if string equals "I love you, Grandma.".
4. When call function, else return "YES INDEED!" if string is in upper case.
5. When call function, else return "I can't hear you!" if string is in lower case.
*/
function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.")
  return "I love you, too."
  else if (string.toUpperCase () === string)
  return "YES INDEED!"
  else if (string.toLowerCase () === string)
  return "I can't hear you!"
}
