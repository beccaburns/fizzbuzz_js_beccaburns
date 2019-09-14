<h2>Question 1.</h2> 
<h3>In your README to the best of your knowledge please explain what the following lines of code do.</h3>

<h4><center>global.browser = new BrowserHelpers()
global.expect = chai.expect;</center></h4>

The above lines of code are global helper methods that allow us to write specs and test our code in a simplified way.

<h2>Question 2.</h2>  
<h3>In your README to the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?</h3>

In this context, we place let fizzBuzz = new FizzBuzz outside of the it block. From what I understand, the word new in this code is creating a new FizzBuzz object. By placing outside of the it block we suspend the repetition because we will be requiring a new FizzBuzz object in each test. Basically, it simplifies the testing.

<h2>Question 3.</h2>
