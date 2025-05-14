window.onload = () => {
  // DOM Elements
  const startBtn = document.getElementById('start-button');
  const startScreen = document.getElementById('start-screen');
  const genderScreen = document.getElementById('gender-screen');
  const pathScreen = document.getElementById('career-path-screen');
  const gameScreen = document.getElementById('game');
  const genderButtons = document.querySelectorAll('.gender-button');
  const educationBtn = document.getElementById('education-button');
  const careerBtn = document.getElementById('career-button');

  // Start game → Go to gender screen
  startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    genderScreen.style.display = 'block';
  });

  // Gender selected → Go to education/career choice
  genderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      gameState.gender = e.target.dataset.gender;
      genderScreen.style.display = 'none';
      pathScreen.style.display = 'block';
    });
  });

  // Choose education or career → Start game
  educationBtn.addEventListener('click', () => {
    gameState.path = 'education';
    startGame();
  });

  careerBtn.addEventListener('click', () => {
    gameState.path = 'career';
    startGame();
  });

  // Begin gameplay UI
  function startGame() {
    pathScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    updateUI();
  }

  // Work click
  document.getElementById('click-button').addEventListener('click', () => {
    gameState.money += gameState.incomePerClick;
    updateUI();

    if (Math.random() < 0.1) {
      triggerRandomEvent();
    }
  });

  updateUI(); // initial UI update
};
