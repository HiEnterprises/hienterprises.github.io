import React from 'react';
import { Link } from 'react-router-dom';

export function HicardHome() {
  return (
    <main style={{ paddingBottom: '80px' }}>
      <header>
        <div id="header-image" className="p-0 text-center bg-image" style={{ 
          backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div className="hero-overlay" style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}></div>
          <div className="overlay-content position-relative z-2 text-white">
            <h1 className="display-3 fw-bold" id="header-title">HiCard</h1>
            <h6 className="mb-0 fs-5 text-light opacity-75" id="header-subtitle">Your Smart Banking and Rewards Solution.</h6>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="container pt-5 text-center">
        <h1 className="display-5 mb-3 text-white" style={{ fontWeight: 600 }}>Welcome to HiCard.</h1>
        <p className="lead text-on-surface-variant col-md-8 mx-auto leading-relaxed">
          HiCard offers a seamless banking experience combined with an exciting rewards program, all designed to make your financial life easier and more rewarding. It's the successor to HiRewards, bringing you even more benefits.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="container py-5">
        <hr className="border-primary border-1 mb-5" />
        <h2 className="display-6 text-center fw-bold text-white mb-5">Discover the Benefits of HiCard</h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <img className="card-img-top" src="https://placehold.co/600x400/a0c9ff/00325a?text=Modern+Interface&font=outfit" alt="Seamless Banking" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="card-title h5 text-white mb-3">Seamless Banking</h3>
                  <p className="card-text text-on-surface-variant small leading-relaxed">
                    Manage your finances effortlessly with our intuitive online platform and mobile app. Enjoy features like easy transfers, bill payments, and account insights.
                  </p>
                </div>
                <a className="btn btn-outline-primary w-100 rounded-pill mt-3" href="#banking">Learn More</a>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <img className="card-img-top" src="https://placehold.co/600x400/bbc7db/253141?text=Valuable+Perks&font=outfit" alt="Exclusive Rewards" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="card-title h5 text-white mb-3">Exclusive Rewards</h3>
                  <p className="card-text text-on-surface-variant small leading-relaxed">
                    Earn points on your everyday spending and redeem them for exciting rewards, discounts, and experiences. The more you use HiCard, the more you earn!
                  </p>
                </div>
                <a className="btn btn-outline-primary w-100 rounded-pill mt-3" href="#rewards">Explore Rewards</a>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <img className="card-img-top" src="https://placehold.co/600x400/d7bde4/3b2947?text=Top-Tier+Security&font=outfit" alt="Secure & Simple" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="card-title h5 text-white mb-3">Secure & Simple</h3>
                  <p className="card-text text-on-surface-variant small leading-relaxed">
                    Your security is our top priority. Benefit from advanced security features and a straightforward platform that's easy to navigate.
                  </p>
                </div>
                <a className="btn btn-outline-primary w-100 rounded-pill mt-3" href="#security">Our Security Promise</a>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <img className="card-img-top" src="https://placehold.co/600x400/bbc7db/253141?text=Easy+Sign-Up&font=outfit" alt="Get Started Today" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="card-title h5 text-white mb-3">Get Started Today</h3>
                  <p className="card-text text-on-surface-variant small leading-relaxed">
                    Joining HiCard is quick and easy. Open your account in minutes and start enjoying a better way to bank and get rewarded.
                  </p>
                </div>
                <a className="btn btn-card w-100 rounded-pill mt-3" href="#signup">Open an Account</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-5">
        <hr className="border-primary border-1 mb-5" />
        <h2 className="text-center fw-bold text-white mb-5">How HiCard Works</h2>
        
        <div className="row text-center mt-4">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
              <img src="https://placehold.co/100x100/a0c9ff/00325a?text=1&font=outfit&font-size=40" alt="Sign Up" className="img-fluid rounded-circle shadow-sm" />
            </div>
            <h3 className="h5 text-white fw-bold">1. Sign Up</h3>
            <p className="px-md-3 text-on-surface-variant small">Create your HiCard account online in just a few simple steps. It's fast, secure, and paperless.</p>
          </div>
          
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
              <img src="https://placehold.co/100x100/bbc7db/253141?text=2&font=outfit&font-size=40" alt="Use Card" className="img-fluid rounded-circle shadow-sm" />
            </div>
            <h3 className="h5 text-white fw-bold">2. Use Your Card</h3>
            <p className="px-md-3 text-on-surface-variant small">Shop at your favorite stores online or in-person. Every transaction helps you earn valuable reward points.</p>
          </div>
          
          <div className="col-md-4">
            <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
              <img src="https://placehold.co/100x100/d7bde4/3b2947?text=3&font=outfit&font-size=40" alt="Earn Rewards" className="img-fluid rounded-circle shadow-sm" />
            </div>
            <h3 className="h5 text-white fw-bold">3. Earn Rewards</h3>
            <p className="px-md-3 text-on-surface-variant small">Accumulate points with every transaction and unlock a world of exclusive rewards and benefits.</p>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <a href="#signup" className="btn btn-card btn-lg me-3 rounded-pill px-4 fs-6">Open an Account</a>
          <a href="#more" className="btn btn-outline-secondary btn-lg rounded-pill px-4 fs-6">Learn More</a>
        </div>
      </section>

      {/* Trust & Commitment Section */}
      <section className="container py-5" id="security">
        <hr className="border-primary border-1 mb-5" />
        <h2 className="text-center fw-bold text-white mb-5">Your Trust, Our Commitment</h2>
        
        <div className="row mt-4 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="mb-4 text-white">Key Advantages:</h4>
            <ul className="list-group list-group-flush bg-transparent">
              <li className="list-group-item bg-transparent text-on-surface-variant border-secondary py-3 d-flex align-items-center">
                <span className="text-primary-custom me-3">🛡️</span> Advanced Fraud Protection
              </li>
              <li className="list-group-item bg-transparent text-on-surface-variant border-secondary py-3 d-flex align-items-center">
                <span className="text-primary-custom me-3">🔒</span> Data Encryption
              </li>
              <li className="list-group-item bg-transparent text-on-surface-variant border-secondary py-3 d-flex align-items-center">
                <span className="text-primary-custom me-3">🎧</span> 24/7 Customer Support
              </li>
              <li className="list-group-item bg-transparent text-on-surface-variant border-secondary py-3 d-flex align-items-center">
                <span className="text-primary-custom me-3">👁️</span> Transparent Fees
              </li>
              <li className="list-group-item bg-transparent text-on-surface-variant border-secondary py-3 d-flex align-items-center">
                <span className="text-primary-custom me-3">👉</span> User-Friendly Interface
              </li>
            </ul>
          </div>
          
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="https://placehold.co/450x300/a0c9ff/00325a?text=Bank-Grade+Security&font=outfit" className="img-fluid rounded-4 shadow-lg border border-secondary" alt="Secure Banking" />
          </div>
        </div>
      </section>
    </main>
  );
}
