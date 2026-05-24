import './CoreFeatures.css';

export default function CoreFeatures() {
  return (
    <section className="c1-section">
      <div className="c1-container">
        <div className="c1-badge">Core Features</div>
        <h2 className="c1-title">Built for Speed & Quality</h2>
        <p className="c1-subtitle">
          Everything you need to go<br />from concept to reality
        </p>

        <div className="c1-grid">
          {/* Card 1 */}
          <div className="c1-card c1-card-1">
            <div className="c1-prompt-box">
              A dreamy cinematic landscape with <span className="c1-blur-text">soft floating clouds</span> and a <span className="c1-blur-text">field of colorful flowers</span> glowing under <span className="c1-blur-text">warm sunlight</span> with ultra-realistic atmospheric detail
            </div>
            
            <div className="c1-pill-btn">
              <span style={{ color: '#a855f7', fontSize: '1rem' }}>✦</span> Enhance idea
            </div>
            
            <svg className="c1-cursor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2L20 11L11 13L9 22L4 2Z" />
            </svg>
            
            <h3>Smart Prompt Suggestions</h3>
          </div>

          {/* Card 2 */}
          <div className="c1-card c1-card-2">
            <div className="c1-api-visual">
              <img 
                src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/network.svg" 
                alt="Network integrations" 
                className="c1-network-img" 
              />
            </div>
            <h3>Seamless Integrations</h3>
          </div>

          {/* Card 3 */}
          <div className="c1-card c1-card-3">
            <div className="c1-mesh"></div>
            
            <img 
              src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/library%20icon.svg" 
              alt="Folder" 
              className="c1-folder" 
            />
            
            <div className="c1-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Explore your creations
            </div>
            
            <h3>Creative Workspace</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
