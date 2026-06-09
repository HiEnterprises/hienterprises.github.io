import React from 'react';
import { Link } from 'react-router-dom';

export function CafefiestaHome() {
  return (
    <main style={{ fontFamily: "'Open Sans', sans-serif", paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/cafefiesta/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 text-white animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
            CafeFiesta™
          </h1>
          <p className="lead mt-2 animate-fade-in delay-200 text-light opacity-75">
            by The Highland Cafe™
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-5 container text-center">
        <div className="row justify-content-center animate-fade-in">
          <div className="col-lg-10">
            <h2 className="display-4 text-primary-custom" style={{ fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
              Coffee, done properly.
            </h2>
            <h2 className="display-4 text-primary-custom mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome to CafeFiesta™.
            </h2>
            <p className="mt-4 fs-5 text-on-surface-variant leading-relaxed">
              CafeFiesta is a brand new experience dedicated to the coffee lovers in all of us. What makes it even more special is that it is by The Highland Cafe™️ Enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-5 bg-primary-container bg-opacity-25 animate-fade-in">
        <div className="container">
          <h2 className="text-center fw-bold text-white mb-5">
            Our Brilliant Restaurant Reviews, as seen on Dougal Maps
          </h2>
          
          <div className="row g-4 text-center">
            {/* Review 1 */}
            <div className="col-sm-6 col-lg">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <p className="fs-4 text-warning mb-2">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant">
                  "Weak and poor. They say 'coffee done properly' but they're lying."
                </p>
                <p className="fw-bold text-white mt-auto mb-0">Dougal Maps</p>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="col-sm-6 col-lg">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <p className="fs-4 text-warning mb-2">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant">
                  "CafeFiesta's specialty blend tastes like diluted disappointment in a cup."
                </p>
                <p className="fw-bold text-white mt-auto mb-0">Dougal Maps</p>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="col-sm-6 col-lg">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <p className="fs-4 text-warning mb-2">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant">
                  "There's only one 'fiesta' at CafeFiesta—the celebration of overpriced mediocrity."
                </p>
                <p className="fw-bold text-white mt-auto mb-0">Dougal Maps</p>
              </div>
            </div>
            
            {/* Review 4 */}
            <div className="col-sm-6 col-lg">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <p className="fs-4 text-warning mb-2">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant">
                  "CafeFiesta: Consistently burning beans and calling it 'done properly'."
                </p>
                <p className="fw-bold text-white mt-auto mb-0">Dougal Maps</p>
              </div>
            </div>
            
            {/* Review 5 */}
            <div className="col-sm-6 col-lg">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <p className="fs-4 text-warning mb-2">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant">
                  "CafeFiesta's true motto: 'Coffee, now served with a side of regret.'"
                </p>
                <p className="fw-bold text-white mt-auto mb-0">Dougal Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-5 animate-fade-in mt-4">
        <div className="container">
          <div className="row g-4">
            {/* App Card */}
            <div className="col-md-4">
              <div className="card h-100 border-0 overflow-hidden text-center shadow-lg">
                <img src="/assets/pics/hicafe/home/hiosmobile.png" className="card-img-top object-fit-cover" alt="Mobile App" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h5 fw-bold text-white mb-3">Download HiOSMobile</h3>
                  <Link to="/hiosmobile" className="btn btn-card w-100 mt-2 rounded-pill py-2">Mobile App</Link>
                </div>
              </div>
            </div>
            
            {/* Menu Card */}
            <div className="col-md-4">
              <div className="card h-100 border-0 overflow-hidden text-center shadow-lg">
                <img src="/assets/pics/hicafe/home/menu.png" className="card-img-top object-fit-cover" alt="Restaurant Menu" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h5 fw-bold text-white mb-3">View Our Menus Online</h3>
                  <Link to="/hicafe/menu" className="btn btn-card w-100 mt-2 rounded-pill py-2">Menus</Link>
                </div>
              </div>
            </div>
            
            {/* Website Card */}
            <div className="col-md-4">
              <div className="card h-100 border-0 overflow-hidden text-center shadow-lg">
                <img src="/assets/pics/hicafe/home/hienterprises.png" className="card-img-top object-fit-cover" alt="HiEnterprises Logo" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h5 fw-bold text-white mb-3">HiEnterprises™ Website</h3>
                  <Link to="/" className="btn btn-card w-100 mt-2 rounded-pill py-2">HiEnterprises™</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
