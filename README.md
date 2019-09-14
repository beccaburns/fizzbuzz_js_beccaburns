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