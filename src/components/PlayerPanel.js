import React from "react";

export default function PlayerPanel({ player }) {
  return (
    <div>
      <h3>Player</h3>
      <div>Name: {player.name}</div>
      <div>Abilities: {player.abilities.join(", ")}</div>
      <div>Weapons: {player.weapons.join(", ")}</div>
    </div>
  );
}