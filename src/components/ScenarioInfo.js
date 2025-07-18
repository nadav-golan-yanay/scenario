import React from "react";

export default function ScenarioInfo({ scenario }) {
  return (
    <div>
      <h2>{scenario.title}</h2>
      <p>{scenario.description}</p>
    </div>
  );
}