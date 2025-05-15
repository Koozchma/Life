function renderPropertyShop() {
  const shop = document.getElementById('property-shop');
  shop.innerHTML = `<h3>Buy Properties</h3>`;
  const propertyList = [
    { name: 'Lemonade Stand', cost: 50, income: 1 },
    { name: 'Car Wash', cost: 200, income: 5 },
    { name: 'Retail Store', cost: 500, income: 10 },
    { name: 'Tech Startup', cost: 1500, income: 30 },
  ];

  propertyList.forEach(prop => {
    const owned = gameState.properties.find(p => p.name === prop.name);
    if (!owned) {
      const btn = document.createElement('button');
      btn.textContent = `${prop.name} ($${prop.cost}) → +$${prop.income}/sec`;
      btn.className = 'btn-secondary';
      btn.addEventListener('click', () => {
        if (gameState.money >= prop.cost) {
          gameState.money -= prop.cost;
          gameState.properties.push(prop);
          updateUI();
        } else {
          alert('Not enough money!');
        }
      });
      shop.appendChild(btn);
    }
  });
}
  
function updateUI() {
  document.getElementById('money').innerText = `Money: $${gameState.money}`;
  updatePlayerInfo();
  renderPropertyShop();
  updatePlayerStatsUI(); // <- add this
}

function updatePlayerInfo() {
  const infoDiv = document.getElementById('career-choice');
  infoDiv.innerHTML = `
    <p><strong>Gender:</strong> ${gameState.gender}</p>
    <p><strong>Path:</strong> ${gameState.path}</p>
    <p><strong>Career:</strong> ${gameState.career ?? 'Unemployed'}</p>
  `;
}

function updateEventLog(desc) {
  const log = document.getElementById('events-log');
  const entry = document.createElement('p');
  entry.textContent = desc;
  log.prepend(entry);
}

function updatePlayerStatsUI() {
  document.getElementById('stat-age').textContent = gameState.stats.age;
  document.getElementById('stat-happiness').textContent = gameState.stats.happiness;
  document.getElementById('stat-stress').textContent = gameState.stats.stress;
  document.getElementById('stat-health').textContent = gameState.stats.health;
}

