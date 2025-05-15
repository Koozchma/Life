function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

window.onload = () => {
  const startBtn = document.getElementById('start-button');
  const genderButtons = document.querySelectorAll('.gender-button');
  const educationBtn = document.getElementById('education-button');
  const careerBtn = document.getElementById('career-button');
  const clickButton = document.getElementById('click-button');

  // Start → Gender screen
  startBtn.addEventListener('click', () => {
    showScreen('gender-screen');
  });

  // Gender → Path screen
  genderButtons.forEach(button => {
    button.addEventListener('click', () => {
      gameState.gender = button.dataset.gender;
      showScreen('career-path-screen');
    });
  });

  // Path → Career choices
  educationBtn.addEventListener('click', () => {
    gameState.path = 'education';
    showCareerOptions(['Doctor', 'Engineer', 'Scientist']);
  });

  careerBtn.addEventListener('click', () => {
    gameState.path = 'career';
    showCareerOptions(['Retail Worker', 'Salesperson', 'Apprentice']);
  });

  // Choose a career → Game screen
  function showCareerOptions(options) {
    const screen = document.getElementById('career-path-screen');
    screen.innerHTML = `<h2>Choose a Career</h2><div class="button-group"></div>`;
    const buttonGroup = screen.querySelector('.button-group');

    options.forEach(career => {
      const btn = document.createElement('button');
      btn.textContent = career;
      btn.className = 'btn-secondary';
      btn.addEventListener('click', () => {
        gameState.career = career;
        applyCareerBonuses(career);
        showScreen('game');
        updateUI();
      });
      buttonGroup.appendChild(btn);
    });

    // Keep the screen visible with career buttons
    screen.classList.add('active');
  }

  function applyCareerBonuses(career) {
    const bonuses = {
      'Doctor': 3,
      'Engineer': 2,
      'Scientist': 2,
      'Retail Worker': 1,
      'Salesperson': 1,
      'Apprentice': 1
    };
    gameState.incomePerClick += bonuses[career] ?? 1;
  }

  // Main clicker logic
  clickButton.addEventListener('click', () => {
    gameState.money += gameState.incomePerClick;
    updateUI();
    if (Math.random() < 0.1) {
      triggerRandomEvent();
    }
  });

  updateUI();
};
