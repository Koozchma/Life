document.getElementById('start-button').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updateUI();
});

document.getElementById('click-button').addEventListener('click', () => {
  gameState.money += gameState.incomePerClick;
  updateUI();

  // 10% chance to trigger random event
  if (Math.random() < 0.1) {
    triggerRandomEvent();
  }
});

window.onload = () => {
  updateUI();
};
