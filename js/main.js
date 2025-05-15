// main.js

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

  startBtn.addEventListener('click', () => {
    showScreen('gender-screen');
  });

  genderButtons.forEach(button => {
    button.addEventListener('click', () => {
      gameState.gender = button.dataset.gender;
      showScreen('career-path-screen');
    });
  });

  educationBtn.addEventListener('click', () => {
    gameState.path = 'education';
    chooseCareer(['Doctor', 'Engineer', 'Scientist']);
  });

  careerBtn.addEventListener('click', () => {
    gameState.path = 'career';
    chooseCareer(['Retail Worker', 'Salesperson', 'Apprentice']);
  });

  function chooseCareer(options) {
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

    screen.classList.add('active');
  }

  function applyCareerBonuses(career) {
    const bonuses = {
      Doctor: 3,
      Engineer: 2,
      Scientist: 2,
      'Retail Worker': 1,
      Salesperson: 1,
      Apprentice: 1
    };
    gameState.incomePerClick += bonuses[career] ?? 1;
  }

  clickButton.addEventListener('click', () => {
    gameState.money += gameState.incomePerClick;
    updateUI();
    if (Math.random() < 0.1) triggerRandomEvent();
  });

  // Passive life progression system
  setInterval(() => {
    gameState.stats.age += 1;
    gameState.stats.happiness = Math.max(0, gameState.stats.happiness - 1);
    gameState.stats.stress = Math.min(100, gameState.stats.stress + 1);
    updateUI();
  }, 30000); // every 30 seconds = 1 year

  updateUI();
};
