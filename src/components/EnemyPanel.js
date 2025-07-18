import React from "react";

export default function EnemyPanel({ enemies }) {
  return (
    <div>
      <h3>Enemies</h3>
      <ul>
        {enemies.map((enemy, idx) => (
          <li key={idx}>
            {enemy.name} (x{enemy.count}) – Abilities: {enemy.abilities.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}