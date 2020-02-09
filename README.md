# JavaScript Intro to Functions Lab

## Objectives

- Practice writing functions
- Explain basics of working with strings
- Explain the difference between `return` and logging
- Practice using `return` and `console.log()`

## Introduction

Welcome to the JavaScript functions lab! You'll notice a few new things in this
lesson that we haven't encountered before. Don't worry, we'll walk you through
them.

Even if you've walked through some of this material before, it's a good idea to
review as we code-along — we're writing functions now, after all.

### Code-Along

For now, open up `index.js` in your text editor. You should see, well, nothing.
We'll fix that soon.

Now open up `test/root.js`. Hey, there's something! What's all of this stuff
doing?

At the very top of the file, you'll see

``` javascript
global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');
```

This might be a bit bewildering, but all we're doing is referencing different
_libraries_ that help us run your tests. A library is code that someone else
(usually multiple someone elses) wrote for our use. Note that `require` won't
work out of the box in the browser. We're actually running our tests in a
different _environment_.

If you go to `test/index-test.js`, you'll see

``` javascript
describe('shout(string)', function() => {
  // there's stuff in here, too
})
```

`describe` is a function provided by our test runner (in this case, we're using
[Mocha](https://mochajs.org/)) — it's basically a container for our tests.

Let's take a closer look at that `describe()`:

``` javascript
describe('shout(string)', function() => {
  it('receives one argument and returns it in all caps', function() => {
    // we'll get to this in a sec
  })
})
```

These internal `describe()` calls are used for _describing_ the functions that
you're going to write. In this case, the test is saying, "Okay, I think there's
going to be a function called `shout`, and it should take one argument (it
doesn't actually matter what the argument is called, but `string`, is nice and
specific, don't you think?). It should _return_ that argument in all caps.

Finally, we have

``` javascript
expect(shout('hello')).toEqual('HELLO')
```

which says that it _expects_ a call to `shout()` with the string `'hello'` will
`equal` the string `'HELLO'`. This is the actual test — otherwise called a spec,
expectation, or assertion — for this function. We can have more than one test
per function, but let's start with this one.

### Running the Tests

To run the tests, run `learn test` in the terminal in your Learn IDE. The first
output you'll see will look like

```text
> java-script-intro-to-functions-lab@0.1.0 test /Users/mbenton/Desktop/curriculum-team/junk/javascript-intro-to-functions-lab
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json --timeout 10000



  shout(string)
    1) receives one argument and returns it in all caps

  whisper(string)
    2) receives one argument and returns it in all lowercase

  logShout(string)
    3) calls console.log() its one argument in all caps

  logWhisper(string)
    4) calls console.log() its one argument in all lowercase

  sayHiToGrandma(string)
    5) returns "I can't hear you!" if `string` is lowercase
    6) returns "YES INDEED!" if `string` is uppercase
    7) returns "I love you, too." if `string` is "I love you, Grandma."`


  0 passing (99ms)
  7 failing

  1) shout(string)
       receives one argument and returns it in all caps:
     ReferenceError: shout is not defined
      at Context.<anonymous> (test/index-test.js:4:5)
      at processImmediate (internal/timers.js:456:21)

  2) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)

  3) logShout(string)
       calls console.log() its one argument in all caps:
     ReferenceError: logShout is not defined
      at Context.<anonymous> (test/index-test.js:18:5)
      at processImmediate (internal/timers.js:456:21)

  4) logWhisper(string)
       calls console.log() its one argument in all lowercase:
     ReferenceError: logWhisper is not defined
      at Context.<anonymous> (test/index-test.js:30:5)
      at processImmediate (internal/timers.js:456:21)

  5) sayHiToGrandma(string)
       returns "I can't hear you!" if `string` is lowercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:40:5)
      at processImmediate (internal/timers.js:456:21)

  6) sayHiToGrandma(string)
       returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:44:5)
      at processImmediate (internal/timers.js:456:21)

  7) sayHiToGrandma(string)
       returns "I love you, too." if `string` is "I love you, Grandma."`:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:48:5)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.
```

Hm, seven failed tests. Let's see if we can get that _first_ test to
pass. Open up `index.js`.

When we write our code, we follow the guidance of the tests. Remember the line,
`describe('shout(string)', () => { ... })`. Well, we know that we need a
function called `shout` that accepts an argument — let's add that first. In
`index.js`:

``` javascript
function shout(string) {
}
```

And what should that function do? Well, the `it()` description tells us that it
"receives one argument and returns it in all caps".

Okay, so with that information, we know that our function should look like this:

``` javascript
function shout(string) {
  return string
}
```

But how do we make `string` all caps? JavaScript has a method for that! It's
called `toUpperCase()`. We can call it on any string:

``` javascript
'Hello!'.toUpperCase() // 'HELLO!'
```

So let's try it with our `shout()` function:

``` javascript
function shout(string) {
  return string.toUpperCase()
}
```

And run our tests again:

``` javascript
learn test
```

```test
shout(string)
    ✓ receives one argument and returns it in all caps

  whisper(string)
    1) receives one argument and returns it in all lowercase

  logShout(string)
    2) calls console.log() its one argument in all caps

  logWhisper(string)
    3) calls console.log() its one argument in all lowercase

  sayHiToGrandma(string)
    4) returns "I can't hear you!" if `string` is lowercase
    5) returns "YES INDEED!" if `string` is uppercase
    6) returns "I love you, too." if `string` is "I love you, Grandma."`


  1 passing (108ms)
  6 failing

  1) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)

  2) logShout(string)
       calls console.log() its one argument in all caps:
     ReferenceError: logShout is not defined
      at Context.<anonymous> (test/index-test.js:18:5)
      at processImmediate (internal/timers.js:456:21)

  3) logWhisper(string)
       calls console.log() its one argument in all lowercase:
     ReferenceError: logWhisper is not defined
      at Context.<anonymous> (test/index-test.js:30:5)
      at processImmediate (internal/timers.js:456:21)

  4) sayHiToGrandma(string)
       returns "I can't hear you!" if `string` is lowercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:40:5)
      at processImmediate (internal/timers.js:456:21)

  5) sayHiToGrandma(string)
       returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:44:5)
      at processImmediate (internal/timers.js:456:21)

  6) sayHiToGrandma(string)
       returns "I love you, too." if `string` is "I love you, Grandma."`:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:48:5)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.
```

Hey! We got one to pass! Six left.

## Your Turn

Now it's your turn to get the rest of the tests to pass. Note that some of them
require you to use `console.log()` instead of `return` — follow the guidance of
the tests!

In this lab, we're writing functions that "speak" at different volumes — they
whisper or they shout. The next test is similar to the first:

```text
1) whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
      at Context.<anonymous> (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)
```

This test is telling us that `whisper(string)` received one argument and returns
it in all lowercase. At the moment, the test is failing becasue whisper is not
defined.

> **Note:** Just like `.toUpperCase()` changes any string to all uppercase in
> JavaScript, `.toLowerCase()` (e.g., `'HELLO'.toLowerCase()`) changes any
> string to all lowercase.

The next two tests are checking to see if a specific string is logged when a
function is called. You will still need to use the `.toUpperCase()` and
`.toLowerCase()` methods for `logShout(string)` and `logWhisper(string)`. Keep in
mind though that these tests are not looking for return values, only logs.

The final function you need to create is `sayHiToGrandma()`. Grandma is a bit
hard of hearing, so whispering can be a bit difficult, but she'll always hear
you if you say, "I love you, Grandma." This time, you will need to return
different strings depending on the string passed into the function.

How do we check if a string is all lowercase or all uppercase?

```javascript
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
```

We can simply check whether the string is the same when we convert it to
uppercase or lowercase! (The lines with the `===` comparisons are the ones that
check). If it's the same, then it was already in that case; if not, then it's
either in the other case or it's mixed case. Now that we know how to compare
strings, how can we use these comparisons to conditionally return different
strings?

Good luck! When all tests are passing, be sure to run `learn submit`!

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-intro-to-functions-lab'>Intro to Functions Lab</a> on Learn.co and start learning to code for free.</p>
