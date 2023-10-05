// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//***********************************
//when a user clicks an empty heart
//*********************************** 
const hearts = document.getElementsByClassName('like-glyph');
function likeHeart(event){
  const heart = event.target;
  mimicServerCall("anyUrl")

  //adding .then()
  .then(function(){
    //when empty heart is clicked
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart';
    } 
    //when full heart is clicked, removing class 'acitvated-heart'
    else {
      heart.innerText = EMPTY_HEART;
      heart.className = '';
    }
  })
  //error handling 
  .catch(function(error){
    const modal = document.getElementById('modal');
    modal.className = '';
    modal.innerText = error;
    setTimeout(function(){
      modal.className = 'hidden',
      3000
    });
  })
}
for(const glyph of hearts){
  glyph.document.addEventListener('click', likeHeart);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
