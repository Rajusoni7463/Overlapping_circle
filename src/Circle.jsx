const RADIUS = 50;
const Circle = ({ x, y, color, intersection }) => {
    return (
      <div
        style={{
          position: "absolute",
          left: x - RADIUS,
          top: y - RADIUS,
          backgroundColor: color,
          height: `${2 * RADIUS}px`,
          width: `${2 * RADIUS}px`,
          borderRadius: "50%",
          border: "1px solid black",
        }}
      >
        {intersection}
      </div>
    );
  };
 export default Circle;