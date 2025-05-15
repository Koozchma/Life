// events.js

let propertyTimeout = null;

function triggerRandomEvent() {
  const eventLog = document.getElementById("events-log");
  const popup = document.getElementById("property-popup");
  popup.classList.add("hidden");
  if (propertyTimeout) clearTimeout(propertyTimeout);

  const lifeEvents = [
    { message: "🚗 Car payment due", effect: () => gameState.money -= 300, type: 'debit' },
    { message: "🎁 Bonus from work!", effect: () => gameState.money += 500, type: 'credit' },
    { message: "💳 Credit card bill arrived", effect: () => gameState.money -= 150, type: 'debit' },
    { message: "🎉 Found money on the street!", effect: () => gameState.money += 50, type: 'credit' },
    { message: "🛠️ Unexpected home repair", effect: () => gameState.money -= 200, type: 'debit' }
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

  if (isLifeEvent) {
    const event = lifeEvents[Math.floor(Math.random() * lifeEvents.length)];
    event.effect();
    appendToLog(event.message, event.type);
    updateUI();
  } else {
    const property = properties[Math.floor(Math.random() * properties.length)];
    appendToLog(`🏠 You landed on a ${property.color} property.`, 'offer');
    showPropertyPopup(property);
  }
}

function appendToLog(msg, type = '') {
  const eventLog = document.getElementById("events-log");
  const entry = document.createElement("p");
  entry.textContent = msg;
  entry.classList.add(type);
  eventLog.prepend(entry);
}

function showPropertyPopup(property) {
  const popup = document.getElementById("property-popup");
  const desc = document.getElementById("property-popup-desc");
  desc.textContent = `Would you like to purchase the ${property.color} property for $${property.price}?`;

  popup.classList.remove("hidden");

  const buyBtn = document.getElementById("buy-property-button");
  const skipBtn = document.getElementById("skip-property-button");

  buyBtn.onclick = () => {
    if (gameState.money >= property.price) {
      gameState.money -= property.price;
      gameState.properties.push(property);
      updateUI();
      renderPropertyInventory();
    } else {
      alert("Not enough money to buy this property.");
    }
    popup.classList.add("hidden");
    if (propertyTimeout) clearTimeout(propertyTimeout);
  };

  skipBtn.onclick = () => {
    popup.classList.add("hidden");
    if (propertyTimeout) clearTimeout(propertyTimeout);
  };

  // Auto-dismiss popup before next event
  propertyTimeout = setTimeout(() => {
    popup.classList.add("hidden");
  }, 5000);
}

setInterval(triggerRandomEvent, Math.floor(Math.random() * 5000) + 5000);
