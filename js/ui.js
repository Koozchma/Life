function updateUI() {
  document.getElementById('money').innerText = `Money: $${gameState.money}`;
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
