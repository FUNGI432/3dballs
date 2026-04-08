import Ballpit from './Ballpit';

function App() {
  const settledConfig = {
    count: 50,
    gravity: 0.02,
    friction: 0.996,
    wallBounce: 0.95,
    minSize: 0.62,
    maxSize: 1.5,
    size0: 1.0,           // Increased for better mouse disturbance
    pullForceMultiplier: .5, // Slightly softened for more natural bounce
    hoverFreq: 1,
    hoverAmp: 0.2,
    minVelocity: 0.001,
    maxVelocity: 0.03      // Increased to allow energetic bouncing
  };

  return (
    <>
      <header className="layout-header">
        <div className="language-selector">
          Language : <span className="lang-highlight">Eng</span>
        </div>

        <div className="logo-container">
          <h1 className="logo">Agency</h1>
          <span className="logo-reg">®</span>
        </div>

        <div className="sub-nav">
          Services | Stack & Culture | Contact
        </div>
      </header>

      <div className="canvas-container">
        <Ballpit
          {...settledConfig}
          followCursor={true}
          colors={[
            '#ffffff',
            '#a0a0a0',
            '#222222',
            '#2a2a5a',
            '#6a4cff',
            '#9b51e0'
          ]}
        />
      </div>
    </>
  );
}

export default App;
