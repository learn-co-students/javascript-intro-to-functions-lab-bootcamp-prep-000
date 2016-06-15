JavaScript Intro to Functions Lab
---

## Objectives

1. Practice writing functions
2. Explain basics of working with strings
3. Explain the difference between `return` and logging
4. Practice using `return` and `console.log()`

## Introduction

Welcome to the JavaScript functions lab! You'll notice a few new things in this lesson that we haven't encountered before. Don't worry, we'll walk you through them.

Even if you've walked through some of this material before, it's a good idea to review as we code-along — we're writing functions now, after all.

### Code-along

For now, open up `index.js` in your text editor. You should see, well, nothing. We'll fix that soon.

Now upon up `test/index-test.js`. Hey, there's something! What's all of this stuff doing?

At the very top of the file, you'll see

``` javascript
const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
```

This might be a bit bewildering, but all we're doing is referencing different _libraries_ that help us run your tests. A library is code that someone else (usually multiple someone elses) wrote for our use. Note that `require` won't work out of the box in the browser. We're actually running our tests in a different _environment_. (Remember the sandbox analogy from earlier? It's just like that.)

A little farther down the page, you'll see

``` javascript
describe('index', () => {
  // there's stuff in here, too
})
```

`describe` is a function provided by our test runner (in this case, we're using [Mocha](https://mochajs.org/)) — it's basically a container for our tests.

Then we have

``` javascript
jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})
```

This line reads `index.js` (remember how we said we'd modify that?) and adds its code to the execution environment.

After that, there's another `describe()`:

``` javascript
describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
    // we'll get to this in a sec
  })
})
```

These internal `describe()` calls are used for _describing_ the functions that you're going to write. In this case, the test is saying, "Okay, I think there's going to be a function called `shout`, and it should take one argument (it doesn't actually matter what the argument is called, but `string`, is nice and specific, don't you think?). It should _return_ that argument in all caps.

Finally, we have

``` javascript
expect(shout('hello')).to.equal('HELLO')
```

which says that it _expects_ a call to `shout()` with the string `'hello'` will `equal` the string `'HELLO'`. This is the actual test — otherwise called a spec, expectation, or assertion — for this function. We can have more than one test per function, but let's start with this one.

### Running the Tests

To run the tests, run `learn test` in the terminal in your Learn IDE. The first output you'll see will look like

![test fail](https://curriculum-content.s3.amazonaws.com/skills-based-js/functions_lab_tests.png)

Hm, that's kind of disappointing. Let's see if we can get that first test to pass. Open up `index.js`.

When we write our code, we follow the guidance of the tests. Remember the line, `describe('shout(string)', () => { ... })`. Well, we know that we need a function called `shout` that accepts an argument — let's add that first. In `index.js`:

``` javascript
function shout(string) {
}
```

And what should that function do? Well, the `it()` description tells us that it "receives one argument and returns it in all caps".

Okay, so with that information, we know that our function should look like

``` javascript
function shout(string) {
  return string
}
```

But how do we make `string` all caps? JavaScript has a method for that! It's called `toUpperCase()`. We can call it on any string:

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
learn
```

![first test passing](https://curriculum-content.s3.amazonaws.com/skills-based-js/functions_first_test_passing.png)

Hey! We got one to pass!

## Your turn

Now it's your turn to get the rest of the tests to pass. Note that some of them require you to use `console.log()` instead of `return` — follow the guidance of the tests!

Oh, lastly: just like `.toUpperCase()` changes any string to all uppercase in JavaScript, `.toLowerCase()` (e.g., `'HELLO'.toLowerCase()`) changesany string to all lowercase.

Good luck! When you're finished, be sure to run `learn submit`!
