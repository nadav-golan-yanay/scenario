export const scenarios = [
  {
    id: 1,
    title: "Siege the Castle",
    description:
      "You are a medieval warrior about to attack a castle. Choose your approach wisely.",
    map: [
      ["🟩", "🟩", "🏰", "🟩", "🟩"],
      ["🟩", "🌲", "🌲", "🌲", "🟩"],
      ["🟩", "🟩", "🟩", "🟩", "🟩"]
    ],
    player: {
      name: "Warrior",
      abilities: ["Sword Mastery", "Stealth"],
      weapons: ["Sword", "Bow"],
    },
    enemies: [
      { name: "Guard", count: 5, abilities: ["Alertness"] },
      { name: "Archer", count: 2, abilities: ["Long Range"] },
    ],
  }
];