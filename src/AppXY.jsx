import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [pos, setPos] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      onMouseMove={(e) => {
        setPos((prev) => ({ ...prev, x: e.clientX }));
      }}
      className="container"
    >
      <div
        className="pointer"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      ></div>
    </div>
  );
}
