import React from "react";

export default function OutcomePanel({ outcome }) {
  return (
    <div>
      <h3>Outcome</h3>
      <strong>{outcome}</strong>
    </div>
  );
}