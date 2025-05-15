// events.js

function triggerRandomEvent() {
  const eventLog = document.getElementById("events-log");

  const lifeEvents = [
    { message: "🚗 Car payment due", effect: () => gameState.money -= 300 },
    { message: "🎁 Bonus from work!", effect: () => gameState.money += 500 },
    { message: "💳 Credit card bill arrived", effect: () => gameState.money -= 150 },
    { message: "🎉 Found money on the street!", effect: () => gameState.money += 50 },
    { message: "🛠️ Unexpected home repair", effect: () => gameState.money -= 200 }
  ];

  const properties = [
    { color: "Brown", price: 200 },
    { color: "Pink", price: 400 },
    { color: "White", price: 600 },
    { color: "Black", price: 800 },
    { color: "Orange", price: 1000 },
    { color: "Purple", price: 1200 },
    { color: "Yellow", price: 1400 },
    { color: "Green", price: 1600 },
    { color: "Blue", price: 1800 },
    { color: "Red", price: 2000 }
  ];

  const isLifeEvent = Math.random() < 0.5;
  let event = null;

  if (isLifeEvent) {
    event = lifeEvents[Math.floor(Math.random() * lifeEvents.length)];
    event.effect();
    appendToLog(event.message);
  } else {
    const property = properties[Math.floor(Math.random() * properties.length)];
    const offerMsg = `🏠 Landed on a ${property.color} property. Buy for $${property.price}?`;
    appendToLog(offerMsg);
  }

  function appendToLog(msg) {
    const entry = document.createElement("p");
    entry.textContent = msg;
    eventLog.prepend(entry);
  }
}

setInterval(triggerRandomEvent, Math.floor(Math.random() * 5000) + 5000);
