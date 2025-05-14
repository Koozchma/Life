function updateUI() {
  document.getElementById('money').innerText = `Money: $${gameState.money}`;
}

function updateEventLog(desc) {
  const log = document.getElementById('events-log');
  const entry = document.createElement('p');
  entry.textContent = desc;
  log.prepend(entry);
}
