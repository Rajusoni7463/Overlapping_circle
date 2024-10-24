import React, { useEffect, useState } from 'react';
import Circle from './Circle';
const RADIUS = 50;

export default function App() {
  const [circleCoords, setCircleCoords] = useState([]);

  const drawCircle = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setCircleCoords((prev) => [...prev, { x, y }]);
  };

  useEffect(() => {
    document.addEventListener('click', drawCircle);
    return () => document.removeEventListener('click', drawCircle);
  }, []);

  const colors = ["khaki", "lightblue", "lightgreen", "coral", "gold", "pink", "violet", "cyan", "orange", "lime"];


  const findNumberOfIntersection = (circleCoordList, x1, y1) => {
    let noOfIntersect = 0;
    circleCoordList.forEach((circle) => {
      const x2 = circle.x;
      const y2 = circle.y;
      const distanceBtwTwoP = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      if (x1 !== x2 || y1 !== y2) {
        if (distanceBtwTwoP < 2 * RADIUS) noOfIntersect++;
      }
    });
    return noOfIntersect;
  };

  return (
    <div className="App">
      <h1>Overlapping Circles</h1>
      {circleCoords.map((coord, index) => {
        const intersection = findNumberOfIntersection(circleCoords, coord.x, coord.y);
        return (
          <Circle
            key={index}
            x={coord.x}
            y={coord.y}
            color={colors[intersection] || "red"}
            intersection={intersection}
          />
        );
      })}
    </div>
  );
}

