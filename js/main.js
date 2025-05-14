document.getElementById('start-button').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updateUI();
});
