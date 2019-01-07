// Please see below for some problems with the learn IDE.

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())

  function sayHiToGrandma(string){
    if (string === string.toLowerCase){
      console.log("I can\'t hear you!")
    } else if (string === string.toUpperCase) {
      console.log("YES INDEED!")
    } else if (string === 'I love you, Grandma'){
      console.log("I love you, too.")
    } else (){
      console.log('What is going on???')
    }
  }

/*

    ATTN: This is  an error message I got after completeing this code the first time. It registered as 'All Tests Passed' on the learn.co website
and I was able to submit it, however everytime I run it I get this/these error message(s):

> java-script-intro-to-functions-lab@0.1.0 test /home/tkcorrea89-110957/code/labs/javascript-intro-to-functions-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json
 0   __,------,
 1   __|  /\_/\
 0   _~|_( x .x)
     _ ""  ""
  0 passing (295ms)
  1 failing
  1)  "before all" hook:
     SyntaxError: /home/tkcorrea89-110957/code/labs/javascript-intro-to-functions-lab-bootcamp-prep-000/index.js: Unexpected token, expected ; (10:8)
     8 | }
     9 |
  > 10 | funtion logShout(string) {
       |         ^
    11 |   console.log(string)
    12 | }
    13 |
      at Parser.pp$5.raise (node_modules/babylon/lib/index.js:4454:13)
      at Parser.pp.unexpected (node_modules/babylon/lib/index.js:1761:8)
      at Parser.pp.semicolon (node_modules/babylon/lib/index.js:1742:38)
      at Parser.pp$1.parseExpressionStatement (node_modules/babylon/lib/index.js:2236:8)
      at Parser.pp$1.parseStatement (node_modules/babylon/lib/index.js:1911:17)
      at Parser.pp$1.parseBlockBody (node_modules/babylon/lib/index.js:2268:21)
      at Parser.pp$1.parseTopLevel (node_modules/babylon/lib/index.js:1778:8)
      at Parser.parse (node_modules/babylon/lib/index.js:1673:17)
      at parse (node_modules/babylon/lib/index.js:7246:37)
      at File.parse (node_modules/babel-core/lib/transformation/file/index.js:517:15)
      at File.parseCode (node_modules/babel-core/lib/transformation/file/index.js:602:20)
      at node_modules/babel-core/lib/transformation/pipeline.js:49:12
      at File.wrap (node_modules/babel-core/lib/transformation/file/index.js:564:16)
      at Pipeline.transform (node_modules/babel-core/lib/transformation/pipeline.js:47:17)
      at Object.transformFileSync (node_modules/babel-core/lib/api/node.js:152:10)
      at Context.<anonymous> (test/root.js:8:29)
npm ERR! Test failed.  See above for more details.

*/
