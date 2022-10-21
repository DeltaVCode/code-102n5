'use strict';


console.log('hello from the js file!');

/** this is a multline comment.
New Vocabulary
- JavaScript - Coding language of the web.  Used to create and control dynamic website content.
- conditionals - A series of checks that determine an outcome.  If something happens, the do this.  If that does not happen but this happens, do this.  If all else fails, then do this last thing.
- operators - Series of symbols that perform arithmetic on numbers.  (+, -, *, **, /, %. ++, --)
- data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array.  There are more advanced data types that will be introduced in 401. 
- variable - a representation or nick name for some type of data.
or || 
and && 
 */

/**
 * start to comment
 * each new line has a star
 * as you can see.
 */

//another way to add comments in js is with the double forward slash. 'single line comment in js.'


// Javascript is all about our inputs and output and managing the web site events


//lets prompt a user for their name when they come to our site.

// variables are a way for us to hold input
// let userName  we are using camel casing. which means the first letter of our variables is lower case and each new word is capitolized.

//we are gonna use a lot of methods.
// = the equal sign does mean equals... it is assigning the result of the prompt to the userName variable. it is an assignment operator.

//take in user input
let userName = prompt('What is your name?');
let nameConfirm = confirm('Is that really your name?');
console.log('What is our input for user name: ', userName);
console.log('did they confirm yes? ',nameConfirm);
let time = prompt('what hour is it? In Military time.');

console.log('Users time is: ', time);

// creating a variable in the global space. so that it is accessible later on in our code when we want to use it.
//we are declaring a variable.
let message;


if(time <= 11){
  message = 'Good Morning';
}else if(time > 12 && time <= 18){
  message = 'Good Afternoon';
} else if(time > 18 && time < 24) {
  message = 'Good Evening';
} else {
  message = 'hello, I dont know your time.';
}

console.log('our message from if else condition is: ', message);

//write is a method  and really what we learn is that there are lot of methods that will do work for us. we just need to learn what those methods are.
//plus sign is a concatonator.

document.write('Hello ' + userName + '! ' + message);
