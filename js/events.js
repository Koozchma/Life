function triggerRandomEvent() {
  const events = [
    { description: "🎉 You won a scratch-off ticket!", value: +100 },
    { description: "🚗 Unexpected car repair", value: -50 },
    { description: "💼 Bonus at work!", value: +75 },
    { description: "🧾 Tax refund arrived", value: +120 },
    { description: "📉 Stock market dip", value: -80 },
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  gameState.money += event.value;
  gameState.events.push(event);
  updateEventLog(event.description);
}
