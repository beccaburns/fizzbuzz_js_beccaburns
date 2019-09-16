<h1> FizzBuzz JavaScript Challenge</h1> 
<h3>Created by Becca Burns</h3>

The following code allows the user to to play FizzBuzz. If a number if divisible by 3 it replies Fizz, if it's divisible by 5 it replies Buzz, if it's divisible by 15 it replies FizzBuzz.

<h5>Dependencies & Code:</h5>
NPM, e2e-training-wheels: (chai, superstatic).

<h5>License</h5>
MIT-license




<h2>Question 1.</h2> 
<h3>In your README to the best of your knowledge please explain what the following lines of code do.</h3>

<h4><center>global.browser = new BrowserHelpers()
global.expect = chai.expect;</center></h4>

The above lines of code are global helper methods that allow us to write specs and test our code in a simplified way.

<h2>Question 2.</h2>  
<h3>In your README to the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?</h3>

In this context, we place let fizzBuzz = new FizzBuzz outside of the it block. From what I understand, the word new in this code is creating a new FizzBuzz object. By placing outside of the it block we suspend the repetition because we will be requiring a new FizzBuzz object in each test. Basically, it simplifies the testing.

<h2>Question 3.</h2>
<h3>In your README to the best of your knowledge please explain the difference between using === and == in JS?</h3>

Using === in Javascript is a strict equal meaning that the type and value compared, will be the same. In this case, the number %3 is the same as 0 - both are numbers, and both are equal to the value 0. The == in Javascript is when the two are compared by like type. It is not as strict in comparing the two values and tries to find similar traits to show true.

<h2>Question 4.</h2>
<h3>In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?</h3>

We are moving (number % 5 === 0) to the top so that the function does not stop at the (number %3 === 0) function.

<h2>Question 5.</h2>
<h3>In your README to the best of your knowledge please explain the difference between feature and unit test.</h3>

A feature test is a test used to test the user experience while the unit test is used to test the logic behind the functionality.

<h2>Question 6.</h2> 
<h3>In your README to the best of your knowledge please explain what this following code does.</h3>

```js
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
The above code does the following;
It initializes the browser and the user observes the fizzBuzz page. The beforeEach method refreshes and loads the page after each test. And, the after method closes the browser after the test is completed.

<h2>Question 7.</h2>  
<h3>In your README to the best of your knowledge please explain what expectations in the context of testing are.</h3>

As a developer, the expectation in the context of testing is creating a test that shows you the link between expectation and implementation. The question is, does the code do what I expect it to do in implementation?

<h2>Question 8.</h2>  
<h3>In your README to the best of your knowledge please write a line to line explanation of what is happening in this code.</h3>

```js
<script src="js/fizzbuzz.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```

Once the dom is loaded, it shows the display and button to initiate the test. When the display is filled and the button is clicked, the function takes the value, creates a new FizzBuzz, checks the value and presents the result.

<h2>Question 9.</h2>  
<h3>In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?</h3>

A CDN is a global network comprised of servers and datacenters that delivers web-based content. In this exercise, I am using it to utilize pre-developed design to my website.