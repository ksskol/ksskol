import React, { useEffect, useRef } from "react";

const DotBackground = () => {
  const canvasRef = useRef(null);
  const dots = [];
  const dotSize =0.55;
  const dotSpacing = 25; 
  const mouseRadius = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    for (let x = 0; x < width; x += dotSpacing) {
      for (let y = 0; y < height; y += dotSpacing) {
        dots.push({ x, y, originalX: x, originalY: y });
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();
      });
    };

    const updateDots = (mouseX, mouseY) => {
      dots.forEach((dot) => {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          dot.x = dot.originalX + Math.cos(angle) * (mouseRadius - distance);
          dot.y = dot.originalY + Math.sin(angle) * (mouseRadius - distance);
        } else {
          dot.x = dot.originalX;
          dot.y = dot.originalY;
        }
      });
      drawDots();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      updateDots(mouseX, mouseY);
    };

    const handleMouseLeave = () => {
      dots.forEach((dot) => {
        dot.x = dot.originalX;
        dot.y = dot.originalY;
      });
      drawDots();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    drawDots();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dots]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default DotBackground;
