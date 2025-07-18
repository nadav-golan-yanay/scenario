import React, { useState } from "react";
import ScenarioInfo from "./components/ScenarioInfo";
import Map from "./components/Map";
import PlayerPanel from "./components/PlayerPanel";
import EnemyPanel from "./components/EnemyPanel";
import StrategyPanel from "./components/StrategyPanel";
import OutcomePanel from "./components/OutcomePanel";
import { scenarios } from "./scenarios";

export default function App() {
  const [selectedScenario] = useState(scenarios[0]);
  const [strategy, setStrategy] = useState(null);
  const [outcome, setOutcome] = useState(null);

  function handleStrategySubmit(chosenStrategy) {
    setStrategy(chosenStrategy);
    // Simple simulation: win if player attacks at night
    const win = chosenStrategy.tactic === "Night Attack";
    setOutcome(win ? "You win!" : "You lose!");
  }

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 24 }}>
      <h1>Scenario Game Demo</h1>
      <ScenarioInfo scenario={selectedScenario} />
      <Map map={selectedScenario.map} />
      <PlayerPanel player={selectedScenario.player} />
      <EnemyPanel enemies={selectedScenario.enemies} />
      <StrategyPanel onSubmit={handleStrategySubmit} />
      {outcome && <OutcomePanel outcome={outcome} />}
    </div>
  );
}