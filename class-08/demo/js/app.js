'use strict';
console.log('hello from the js file!');




function getUserName(){
  let userName = prompt('What is your name?');
  console.log('user name data type:', typeof(userName));
  return document.write(userName);
}


function guessANumber(){
  let answer;
  while(answer !== '7'){
    answer = prompt('Guess a number between 1-10');
    if(answer !== '7'){
      alert('Try again!');
    } else {
      alert('You are correct you choose 7!');
    }
  }
}



function getUserTime(){
  let message;
  let time = prompt('what hour is it? In Military time.');
  if(time <= 11){
    message = 'Good Morning';
  }else if(time >= 12 && time <= 18){
    message = 'Good Afternoon';
  } else if(time > 18 && time < 24) {
    message = 'Good Evening';
  } else {
    message = 'hello, I dont know your time.';
  }
  return message;
}


function displayRating() {
  let output = '';
  let rating = prompt('scale of 1-5, how many stars?');
  //for loop
  for(let i = 0; i < rating; i++){
    output += '<img  src=\'images/CRAIG-B.png\'  />';
  }
  return document.write(output);
}



guessANumber();
getUserName();
getUserTime();
displayRating();
