
' use strict';
// document.querySelector(".message").textContent = "correct Number!";
// document.querySelector(".number").textContent = 20;

// document.querySelector('.guess').value = 23;

//we set secretNumber
let secretNumber = Math.floor(Math.random() * 20 )+ 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

//create a function for the message
document.querySelector('.check').addEventListener
('click',function(){
 const guess = Number(document.querySelector('.guess').value);
 

 //when there is input
  if(!guess){
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
   
    //when players wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style .backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

      //setting the highscore
    if(score > highscore){
      highscore = score
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  }else if (guess !== secretNumber) {
    if (score > 1){
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      //else if inside another else if
      score--;
      document.querySelector('.score').textContent = score;
     }else {
      displayMessage('You Lost the game!')
      document.querySelector('.score').textContent = 0;
     }
    }
  //   //when guess is too high
  // }else if (guess > secretNumber){
  //    if (score > 1){
  //     document.querySelector('.message').textContent = 'Too High!'; //else if inside another else if
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //    }else {
  //     document.querySelector('.message').textContent = 'You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //    }
   
  //    //when guess is too low
  // }else if (guess < secretNumber){
  //   if (score > 1){
  //     document.querySelector('.message').textContent = 'Too Low!'; //else if inside another else if
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } }else {
  //     document.querySelector('.message').textContent = 'You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  // }


});

//the again button
document.querySelector('.again').addEventListener
('click',function(){
   secretNumber = Math.floor(Math.random() * 20 )+ 1;
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...')
  document.querySelector('body').style .backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})