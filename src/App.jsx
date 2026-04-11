import Ballpit from './Ballpit';

function App() {
  const settledConfig = {
    count: 50,
    gravity: 0.02,
    friction: 0.996,
    wallBounce: 0.95,
    minSize: 0.62,
    maxSize: 1.5,
    size0: 1.0,
    pullForceMultiplier: 0.5,
    hoverFreq: 1,
    hoverAmp: 0.2,
    minVelocity: 0.001,
    maxVelocity: 0.03
  };

  return (
    <>
      <header className="layout-header">
        <a href="/" className="logo-container">
          <h1 className="logo">Agency</h1>
          <span className="logo-reg">®</span>
        </a>

        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <main className="foreground-text">
        <h2>What's your next<br />iconic move</h2>
      </main>

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
