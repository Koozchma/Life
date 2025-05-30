// ui.js

function updateUI() {
  document.getElementById('money').textContent = `Money: $${gameState.money}`;
  updatePlayerInfo();
  updatePlayerStatsUI();
  renderPropertyInventory();
  updateBuyButtonState();
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

function updateBuyButtonState() {
  const popup = document.getElementById("property-popup");
  if (popup.classList.contains("hidden")) return;

  const priceMatch = document.getElementById("property-popup-desc").textContent.match(/\$(\d+)/);
  if (!priceMatch) return;

  const price = parseInt(priceMatch[1], 10);
  const buyBtn = document.getElementById("buy-property-button");
  if (gameState.money < price) {
    buyBtn.disabled = true;
    buyBtn.textContent = "Not enough money";
  } else {
    buyBtn.disabled = false;
    buyBtn.textContent = "Buy";
  }
}
