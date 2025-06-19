import React, { useRef, useEffect } from "react";

interface DotsProps {
  dotColor?: string;
  dotRadius?: number;
  dotSpacing?: number;
  backgroundColor?: string;
}

const Dots: React.FC<DotsProps> = ({
  dotColor = "#888",
  dotRadius = 2,
  dotSpacing = 24,
  backgroundColor = "transparent",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = dotColor;
      for (let x = dotSpacing / 2; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
    // eslint-disable-next-line
  }, [dotColor, dotRadius, dotSpacing, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default Dots;
