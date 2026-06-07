import React from 'react';
import Ballpit from '../Ballpit';

export default function Scene() {
  const customConfig = {
    count: 35,
    gravity: 0.015,
    friction: 0.996,
    wallBounce: 0.95,
    minSize: 0.6,
    maxSize: 1.4,
    size0: 1.0,           
    pullForceMultiplier: 0.6, 
    hoverFreq: 0.8,
    hoverAmp: 0.15,
    minVelocity: 0.001,
    maxVelocity: 0.03,
    colors: [
      '#131313', // Black
      '#F3F3F3', // White
      '#8C8C8C', // Gray
      '#4E37FF', // Vivid Purple
      '#5D5DFF'  // Muted Purple
    ],
    materialParams: {
      metalness: 0.05,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    }
  };

  return (
    <div 
      className="w-full h-full pointer-events-auto"
      style={{
        background: "radial-gradient(circle at 50% 100%, #C8C8C8 0%, #FFFFFF 100%)"
      }}
    >
      <Ballpit
        {...customConfig}
        followCursor={true}
        className="w-full h-full pointer-events-auto"
      />
    </div>
  );
}
