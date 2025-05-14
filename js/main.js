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

    function chooseCareer(careerOptions) {
    pathScreen.innerHTML = `<h2>Choose a Career</h2>`;
    careerOptions.forEach(career => {
      const btn = document.createElement('button');
      btn.textContent = career;
      btn.classList.add('career-btn');
      btn.addEventListener('click', () => {
        gameState.career = career;
        applyCareerBonuses(career);
        pathScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        updateUI();
      });
      pathScreen.appendChild(btn);
    });
  }

    function applyCareerBonuses(career) {
    const bonusMap = {
      'Doctor': 3,
      'Engineer': 2,
      'Scientist': 2,
      'Retail Worker': 1,
      'Salesperson': 1,
      'Apprentice': 1,
    };
    gameState.incomePerClick += bonusMap[career] ?? 1;
  }

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
