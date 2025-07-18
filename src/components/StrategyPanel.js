import React, { useState } from "react";

const tactics = ["Night Attack", "Direct Assault", "Sneak In"];

export default function StrategyPanel({ onSubmit }) {
  const [tactic, setTactic] = useState(tactics[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ tactic });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Plan your strategy</h3>
      <label>
        Tactic:
        <select value={tactic} onChange={e => setTactic(e.target.value)}>
          {tactics.map(t => (
            <option value={t} key={t}>{t}</option>
          ))}
        </select>
      </label>
      <button type="submit" style={{ marginLeft: 10 }}>
        Execute!
      </button>
    </form>
  );
}