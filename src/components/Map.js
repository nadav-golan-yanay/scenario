import React from "react";

export default function Map({ map }) {
  return (
    <div>
      <h3>Map</h3>
      <div style={{ fontFamily: "monospace" }}>
        {map.map((row, i) => (
          <div key={i}>{row.join(" ")}</div>
        ))}
      </div>
    </div>
  );
}