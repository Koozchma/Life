// ui.js

function updateUI() {
  document.getElementById('money').textContent = `Money: $${gameState.money}`;
  updatePlayerInfo();
  updatePlayerStatsUI();
  renderPropertyInventory();
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

function renderPropertyInventory() {
  const list = document.getElementById('owned-properties');
  list.innerHTML = '';
  gameState.properties.forEach(p => {
    const item = document.createElement('li');
    item.textContent = `${p.color} Property ($${p.price})`;
    list.appendChild(item);
  });
}
