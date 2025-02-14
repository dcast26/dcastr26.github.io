function nextScreen() {
    document.getElementById('screen1').classList.remove('active');
    document.getElementById('screen2').classList.add('active');
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.play();
    const buttonClick = new Audio('sound/buttonClick.mp3');
    buttonClick.play();
  }


function prevScreen() {
    document.getElementById('screen2').classList.remove('active');
    document.getElementById('screen1').classList.add('active');
    const buttonClick = new Audio('sound/buttonClick.mp3');
    buttonClick.play();
}

let clickedLetters = new Set();

function valentineButton(){
    document.getElementById('screen2').classList.remove('active');
    document.getElementById('valentineScreen').classList.add('active');
}
function showLoveNote(noteNumber) {
    const letter = document.getElementById('letter' + noteNumber);
    letter.src = 'images/letter-open.png';

    const paperSound = new Audio('sound/paper.wav');
    paperSound.play();  

    clickedLetters.add(noteNumber);


    setTimeout(() => {
        document.getElementById('screen2').classList.remove('active');
        document.getElementById('luv' + noteNumber).classList.add('active');
        if (clickedLetters.size === 6) {
            document.getElementById('valentineButton').style.display = 'block';
          }
    }, 500);


}
  
function backToScreen2() {
    const loveNotes = document.querySelectorAll('[id^="luv"]');
    loveNotes.forEach(note => note.classList.remove('active'));
    document.getElementById('screen2').classList.add('active');

    const buttonClick = new Audio('sound/buttonClick.mp3');
    buttonClick.play();
}

function valentineYes() {
    document.getElementById('valentineScreen').classList.remove('active');
    document.getElementById('yesScreen').classList.add('active');
  }
  
  function valentineNo() {
    document.getElementById('valentineScreen').classList.remove('active');
    document.getElementById('noScreen').classList.add('active');
  }


  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  
  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }
  
  document.querySelector('.carousel').addEventListener('click', showNextImage);