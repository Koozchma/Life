// ui.js

function updateUI() {
  document.getElementById('money').textContent = `Money: $${gameState.money}`;
  updatePlayerInfo();
  updatePlayerStatsUI();
}

function updatePlayerInfo() {
  const choice = gameState.career ? `${gameState.gender}, ${gameState.career}` : '';
  document.getElementById('career-choice').textContent = choice;
}

function updatePlayerStatsUI() {
  document.getElementById('stat-age').textContent = gameState.stats.age;
  document.getElementById('stat-happiness').textContent = gameState.stats.happiness;
  document.getElementById('stat-stress').textContent = gameState.stats.stress;
  document.getElementById('stat-health').textContent = gameState.stats.health;
}
