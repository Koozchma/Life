// events.js

function triggerRandomEvent() {
  const eventLog = document.getElementById("events-log");

const lifeEvents = [
  // Original 5
  { message: "🚗 Car payment due", effect: () => gameState.money -= 300 },
  { message: "🎁 Bonus from work!", effect: () => gameState.money += 500 },
  { message: "💳 Credit card bill arrived", effect: () => gameState.money -= 150 },
  { message: "🎉 Found money on the street!", effect: () => gameState.money += 50 },
  { message: "🛠️ Unexpected home repair (leaky pipe)", effect: () => gameState.money -= 200 },

  // Income & Windfalls
  { message: "💼 Monthly salary credited", effect: () => gameState.money += 2500 },
  { message: "💻 Completed a freelance web design project", effect: () => gameState.money += 450 },
  { message: "📈 Investment dividends received", effect: () => gameState.money += 120 },
  { message: "💰 Tax refund arrived!", effect: () => gameState.money += 350 },
  { message: "🛒 Sold old electronics online", effect: () => gameState.money += 85 },
  { message: "🎂 Received a cash gift for your birthday", effect: () => gameState.money += 100 },
  { message: "🚀 Side hustle (craft sales) was profitable this month", effect: () => gameState.money += 220 },
  { message: "🎟️ Won $25 on a lottery scratch-off", effect: () => gameState.money += 25 },
  { message: "📬 Rebate check for a new appliance came", effect: () => gameState.money += 40 },
  { message: "🌟 Pay raise approved! (Immediate small bonus)", effect: () => gameState.money += 150 },
  { message: "🧑‍🏫 Payment for tutoring a student", effect: () => gameState.money += 65 },
  { message: "🧐 Participated in a paid university research study", effect: () => gameState.money += 75 },
  { message: "👖 Found a $10 bill in an old jacket pocket", effect: () => gameState.money += 10 },
  { message: "🏆 Won a small online coding competition", effect: () => gameState.money += 50 },
  { message: "📈 Stock market investment paid off, cashed out gains", effect: () => gameState.money += 280 },
  { message: "🐶 Received payment for pet sitting a neighbor's dog", effect: () => gameState.money += 70 },
  { message: "💸 A friend finally paid you back that $50", effect: () => gameState.money += 50 },
  { message: "🧾 Received a refund for a returned online purchase", effect: () => gameState.money += 30 },
  { message: "💡 Sold a popular photo you took to a stock image site", effect: () => gameState.money += 45 },
  { message: "💰 Received a small inheritance", effect: () => gameState.money += 1000 },

  // Regular Expenses
  { message: "🏡 Rent/Mortgage payment due", effect: () => gameState.money -= 1250 },
  { message: "💡 Electricity bill is due", effect: () => gameState.money -= 75 },
  { message: "💧 Water & sewage bill due", effect: () => gameState.money -= 45 },
  { message: "🌐 Internet bill payment", effect: () => gameState.money -= 65 },
  { message: "🛒 Weekly grocery shopping", effect: () => gameState.money -= 110 },
  { message: "📱 Monthly phone bill due", effect: () => gameState.money -= 55 },
  { message: "🎬 Streaming service (e.g., Netflix) subscription renewal", effect: () => gameState.money -= 16 },
  { message: "🏋️ Gym membership monthly fee", effect: () => gameState.money -= 35 },
  { message: "🚌 Monthly public transport pass purchase", effect: () => gameState.money -= 80 },
  { message: "🎓 Student loan installment paid", effect: () => gameState.money -= 220 },
  { message: "🛡️ Health insurance premium payment", effect: () => gameState.money -= 190 },
  { message: "🚗 Car insurance premium payment", effect: () => gameState.money -= 130 },
  { message: "📰 Online newspaper subscription renewal", effect: () => gameState.money -= 12 },
  { message: "🎵 Music streaming service renewal", effect: () => gameState.money -= 11 },
  { message: "🗑️ Quarterly trash & recycling collection fee", effect: () => gameState.money -= 60 },
  { message: "📦 Cloud storage subscription fee (annual)", effect: () => gameState.money -= 50 }, // annual but shown as one hit
  { message: "💊 Monthly prescription medication refill cost", effect: () => gameState.money -= 30 },
  { message: "🧐 Professional organization membership renewal", effect: () => gameState.money -= 75 },
  { message: "💧 Bottled water delivery service", effect: () => gameState.money -= 20 },

  // Unexpected Expenses
  { message: "🧑‍⚕️ Doctor's visit co-pay for a sudden illness", effect: () => gameState.money -= 35 },
  { message: "🦷 Unexpected dental procedure (e.g., root canal)", effect: () => gameState.money -= 400 },
  { message: "🐕 Pet had an emergency vet visit", effect: () => gameState.money -= 280 },
  { message: "🧺 Washing machine suddenly broke down, repair cost", effect: () => gameState.money -= 180 },
  { message: "🚗 Car broke down, needed a new alternator", effect: () => gameState.money -= 350 },
  { message: "🚦 Received a speeding ticket", effect: () => gameState.money -= 120 },
  { message: "💸 Lost your wallet (cash and replacement of cards cost)", effect: () => gameState.money -= 80 },
  { message: "✈️ Urgent flight booking for a family emergency", effect: () => gameState.money -= 450 },
  { message: "🐜 Home needed pest control service for ants", effect: () => gameState.money -= 90 },
  { message: "📱 Dropped your phone, screen replacement cost", effect: () => gameState.money -= 150 },
  { message: "💧 Major plumbing issue at home, emergency fix", effect: () => gameState.money -= 320 },
  { message: "🔋 Car battery died and needed replacement", effect: () => gameState.money -= 140 },
  { message: "👓 Lost your prescription glasses, replacement cost", effect: () => gameState.money -= 200 },
  { message: "🔥 Small kitchen fire, replacing a damaged microwave", effect: () => gameState.money -= 100 },
  { message: "💻 Laptop crashed, data recovery and repair costs", effect: () => gameState.money -= 250 },
  { message: "🥶 Home heating system failed in winter, urgent repair", effect: () => gameState.money -= 400 },
  { message: "🔑 Locked out of your car, locksmith fee", effect: () => gameState.money -= 95 },
  { message: "⛈️ Storm damage to roof, minor repair needed", effect: () => gameState.money -= 220 },
  { message: "🚲 Bicycle got stolen, considering replacement", effect: () => gameState.money -= 180 }, // Cost if replaced

  // Social, Gifts & Entertainment
  { message: "🎁 Bought a birthday gift for a family member", effect: () => gameState.money -= 40 },
  { message: "💒 Attended a close friend's wedding, gift & travel", effect: () => gameState.money -= 250 },
  { message: "🤝 Made a generous donation to a favorite charity", effect: () => gameState.money -= 50 },
  { message: "🍔 Dinner out with friends at a new restaurant", effect: () => gameState.money -= 60 },
  { message: "🎤 Bought tickets to a popular music festival", effect: () => gameState.money -= 180 },
  { message: "🎄 Holiday gift shopping for family and friends", effect: () => gameState.money -= 300 },
  { message: "👶 Purchased a thoughtful gift for a baby shower", effect: () => gameState.money -= 45 },
  { message: "❤️ Celebrated an anniversary with a special dinner", effect: () => gameState.money -= 100 },
  { message: "🍿 Movie night out (tickets, popcorn, drinks)", effect: () => gameState.money -= 35 },
  { message: "🎳 Evening of bowling and pizza with friends", effect: () => gameState.money -= 50 },
  { message: "📚 Bought a couple of new books from your wishlist", effect: () => gameState.money -= 25 },
  { message: "🎮 Pre-ordered a highly anticipated video game", effect: () => gameState.money -= 65 },
  { message: "🖼️ Visited a special exhibit at the art museum", effect: () => gameState.money -= 20 },
  { message: "🍻 Weekend drinks and appetizers with coworkers", effect: () => gameState.money -= 55 },
  { message: "🏞️ Paid for a weekend camping trip (gear rental, fees)", effect: () => gameState.money -= 120 },

  // Work & Education
  { message: "🎓 Enrolled in an advanced online certification course", effect: () => gameState.money -= 250 },
  { message: "🤝 Attended an industry networking dinner (ticket cost)", effect: () => gameState.money -= 40 },
  { message: "👔 Purchased new professional attire for interviews", effect: () => gameState.money -= 130 },
  { message: "📖 Bought textbooks and supplies for a college course", effect: () => gameState.money -= 100 },
  { message: "🎟️ Registered for a major virtual industry conference", effect: () => gameState.money -= 150 },
  { message: "📉 A freelance contract ended earlier than expected", effect: () => gameState.money -= 200 }, // Simulates lost income
  { message: "🎂 Contributed to an office farewell party for a colleague", effect: () => gameState.money -= 20 },
  { message: "🔨 Paid for a premium software subscription for work projects", effect: () => gameState.money -= 30 },
  { message: "🚗 Fuel costs for commuting to a week-long training", effect: () => gameState.money -= 50 },
  { message: "💡 Paid for a resume review and career coaching session", effect: () => gameState.money -= 120 },

  // Home & Personal Care
  { message: "🛋️ Bought a new rug to brighten up the living room", effect: () => gameState.money -= 70 },
  { message: "🌱 Purchased plants and soil for a small balcony garden", effect: () => gameState.money -= 40 },
  { message: "🍳 Replaced a worn-out set of kitchen knives", effect: () => gameState.money -= 60 },
  { message: "💇 Got a stylish new haircut and color", effect: () => gameState.money -= 85 },
  { message: "💆 Treated yourself to a full-body spa day", effect: () => gameState.money -= 150 },
  { message: "🧴 Stocked up on skincare and beauty products", effect: () => gameState.money -= 50 },
  { message: "👟 Bought high-quality hiking boots for outdoor adventures", effect: () => gameState.money -= 110 },
  { message: "🧼 Dry cleaning bill for winter coats and formal wear", effect: () => gameState.money -= 45 },
  { message: "✨ Impulse buy: a new smart home gadget", effect: () => gameState.money -= 70 },
  { message: "👓 Optician appointment, new frames and lenses", effect: () => gameState.money -= 280 },

  // Miscellaneous Fees & Small Events
  { message: "⏰ Incurred a small late fee on a utility bill", effect: () => gameState.money -= 10 },
  { message: "🏦 Monthly maintenance fee for your checking account", effect: () => gameState.money -= 15 },
  { message: "🅿️ Paid for parking during a downtown shopping trip", effect: () => gameState.money -= 20 },
  { message: "💸 ATM withdrawal fee from a non-affiliated bank", effect: () => gameState.money -= 4 },
  { message: "📚 Fine for an overdue library book you forgot about", effect: () => gameState.money -= 5 },
  { message: "📦 Paid for return shipping for an ill-fitting online order", effect: () => gameState.money -= 8 },
  { message: "🤝 Lent $30 to a sibling for lunch", effect: () => gameState.money -= 30 },
  { message: "🎉 Hosted a small get-together, bought snacks and drinks", effect: () => gameState.money -= 75 },
  { message: "🐶 Bought a new toy and treats for your pet", effect: () => gameState.money -= 25 },
  { message: "💰 Decided to start a 'rainy day' fund, moved money to savings", effect: () => gameState.money -= 100 } // Represents saving
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
