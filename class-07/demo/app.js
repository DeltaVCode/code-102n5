'use strict';
console.log('Hello World');
//globally scoped variable accessible to the entire file.
let userName;
let message;

function getUserName(){
//codde block within the {}
userName = prompt('What is your name?');
console.log('What is our input for user name: '   , userName);
let nameConfirm = confirm('Is the really your name?');
console.log('Did they confirm? ', nameConfirm);
}






// function keyword  and the function name, then () and {}
function getUserTime(){
  let time = prompt('What hour is it in Military time?');
  console.log('User time is: ', time);
  if(time <= 11){
    message = 'Good Morning';
  } else if(time > 12 && time <= 17){
    message = 'Good Afternoon';
  } else if(time > 18 && time < 24){
    message = 'Good Evening';
  } else {
    message = 'Hello, I dont know your time.';
  }
  console.log('our message from if else condition is: ', message);
}

//invoke our functions we call the function to run it. 
getUserName();
getUserTime();



document.write('Hello ' + userName + '! ' + message);



