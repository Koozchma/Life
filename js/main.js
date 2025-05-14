document.getElementById('click-button').addEventListener('click', () => {
  gameState.money += gameState.incomePerClick;
  updateUI();
  if (Math.random() < 0.1) triggerRandomEvent(); // 10% chance
});

window.onload = () => {
  updateUI();
};
