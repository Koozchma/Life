window.onload = () => {
  // Start button logic
  const startButton = document.getElementById('start-button');
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game');

  startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    updateUI();
  });

  // Clicker button logic
  document.getElementById('click-button').addEventListener('click', () => {
    gameState.money += gameState.incomePerClick;
    updateUI();

    // 10% chance for a random event
    if (Math.random() < 0.1) {
      triggerRandomEvent();
    }
  });

  // Initial render
  updateUI();
};
