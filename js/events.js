function triggerRandomEvent() {
  const events = [
    { description: "You won a scratch-off ticket!", value: +100 },
    { description: "Car repair needed", value: -50 },
    { description: "Bonus at work!", value: +75 },
  ];
  const event = events[Math.floor(Math.random() * events.length)];
  gameState.money += event.value;
  gameState.events.push(event);
  updateEventLog(event.description);
}
