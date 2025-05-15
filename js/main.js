// main.js

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');

  const popup = document.getElementById("property-popup");
  popup.classList.add("hidden");
  if (typeof propertyTimeout !== 'undefined' && propertyTimeout) {
    clearTimeout(propertyTimeout);
    propertyTimeout = null;
  }
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
    const rankMap = {
      Doctor: ['Intern', 'Med Student', 'Resident', 'Doctor', 'Specialist'],
      Engineer: ['Trainee', 'Junior Engineer', 'Engineer', 'Senior Engineer', 'Architect'],
      Scientist: ['Lab Tech', 'Researcher', 'Lead Scientist', 'Professor', 'Pioneer'],
      Salesperson: ['Trainee', 'Associate', 'Senior Rep', 'Manager', 'Director'],
      Apprentice: ['Helper', 'Apprentice', 'Journeyman', 'Expert', 'Master'],
      'Retail Worker': ['Clerk', 'Senior Clerk', 'Lead Clerk', 'Supervisor', 'Store Manager']
    };

    gameState.incomePerClick = 1;
    gameState.careerProgress = {
      track: 0,
      goal: 5,
      stage: 0,
      ranks: rankMap[career] || []
    };
  }

  clickButton.addEventListener('click', () => {
    gameState.money += gameState.incomePerClick;

    // Add EXP logic
    gameState.exp += 10;
    const nextLevelExp = gameState.level * 100;
    if (gameState.exp >= nextLevelExp) {
      gameState.exp -= nextLevelExp;
      gameState.level++;
      gameState.incomePerClick++;

      const log = document.getElementById("events-log");
      const msg = document.createElement("p");
      msg.classList.add("credit");
      msg.textContent = `🎉 You leveled up to Level ${gameState.level}! Income increased.`;
      log.prepend(msg);
    }

    if (gameState.careerProgress) {
      gameState.careerProgress.track++;
      if (gameState.careerProgress.track >= gameState.careerProgress.goal) {
        gameState.careerProgress.stage++;
        gameState.careerProgress.track = 0;
        gameState.incomePerClick += 1;
      }
    }

    updateUI();
    if (Math.random() < 0.1) triggerRandomEvent();
  });

  setInterval(() => {
    gameState.stats.age += 1;
    gameState.stats.happiness = Math.max(0, gameState.stats.happiness - 1);
    gameState.stats.stress = Math.min(100, gameState.stats.stress + 1);
    updateUI();
  }, 30000);

  updateUI();
};
