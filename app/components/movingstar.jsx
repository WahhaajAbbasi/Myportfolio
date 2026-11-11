'use client';
import React, { useEffect, useState } from "react";

const MovingStars = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Generate stars with random properties
    const generateStars = () => {
      const starCount = 200;
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Horizontal position (0-100%)
          y: Math.random() * 100, // Vertical position (0-100%)
          size: Math.random() * 3 + 1, // Size between 1-4px
          duration: Math.random() * 10 + 15, // Animation duration 15-25s
          delay: Math.random() * 5, // Start delay 0-5s
          opacity: Math.random() * 0.7 + 0.3, // Opacity 30-100%
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `moveRightToLeft ${star.duration}s linear ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default MovingStars;