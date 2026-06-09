import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function HiTechHome() {
  return (
    <main style={{ paddingBottom: '80px' }}>
      <section className="py-5">
        <div className="container text-center py-5">
          <Link to="/hitech/computers">
            <img src="/assets/pics/hitech/homebanner.png" alt="HiTech Banner" className="img-fluid w-100 rounded-4 shadow-sm" />
          </Link>
        </div>
        <div className="container text-start py-4">
          <h1 className="display-4 fw-bold text-white">Welcome to something special. Welcome to HiTech.</h1>
        </div>
        <div className="container text-center py-4">
          <img src="/assets/pics/hitech/hq.png" alt="HiTech HQ" className="img-fluid rounded-4 shadow-lg w-75" />
          <p className="mt-3 text-on-surface-variant">Our headquarters in Birmingham</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">Product Categories</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">
              We sell tonnes of quality tech products, both by HiTech and MyLad, from a variety of different categories. Pick a category from below to explore more.
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <img src="/assets/pics/hitech/products/myphoneai.png" className="card-img-top object-fit-cover" alt="Phones" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="card-title h5 text-white mb-3">Phones</h3>
                  <Link to="/hitech/phones" className="btn btn-card w-100 rounded-pill">Explore Phones</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <img src="/assets/pics/hitech/products/tablets.webp" className="card-img-top object-fit-cover" alt="Tablets" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="card-title h5 text-white mb-3">Tablets</h3>
                  <Link to="/hitech/tablets" className="btn btn-card w-100 rounded-pill">Explore Tablets</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <img src="/assets/pics/hitech/products/mytendo-sd.png" className="card-img-top object-fit-cover" alt="Consoles" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="card-title h5 text-white mb-3">Consoles</h3>
                  <Link to="/hitech/consoles" className="btn btn-card w-100 rounded-pill">Explore Consoles</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <img src="/assets/pics/hitech/products/himicpro.png" className="card-img-top object-fit-cover" alt="Computers" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="card-title h5 text-white mb-3">Computers</h3>
                  <Link to="/hitech/computers" className="btn btn-card w-100 rounded-pill">Explore Computers</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <img src="/assets/pics/hitech/products/hitv.png" className="card-img-top object-fit-cover" alt="TVs" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="card-title h5 text-white mb-3">TVs</h3>
                  <Link to="/hitech/televisions" className="btn btn-card w-100 rounded-pill">Explore TVs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiTechPhones() {
  return (
    <main style={{ paddingBottom: '80px' }}>
      <section className="hero-section" style={{ height: '50vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')", opacity: 0.3 }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <h1 className="display-2 fw-bold text-white animate-fade-in">Phones</h1>
        </div>
      </section>

      <section className="py-5 container text-start">
        <h2 className="display-5 fw-bold text-white">The most innovative phones on the planet.</h2>
        <p className="fs-4 text-on-surface-variant mt-2">Developed by HiTech and MyLad.</p>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-white">Phones by MyLad</h2>
            <p className="text-on-surface-variant">We sell every phone MyLad has ever released. And their phones are STUNNING. Take a look below.</p>
          </div>

          <div className="row g-4 mb-5">
            {/* MyPhone AI */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/myphoneai.png" className="img-fluid rounded-4" alt="MyPhone AI" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">MyPhone AI</h3>
                    <p className="text-on-surface-variant">Introducing the all-new MyPhone AI, with MyLad AI and MyLad AI OS built in.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/mAq1KEDIQ5E" title="MyPhone AI Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLad AI OS 16 ✨ | Released February 2026 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* XPhone */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/xphone.png" className="img-fluid rounded-4" alt="XPhone" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">XPhone</h3>
                    <p className="text-on-surface-variant">The new XPhone by MyLad, geared towards those of you who are MASSIVE fans of the works of Elon. This phone is primarily designed to be focused around using X formerly Twitter on a daily basis.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/D1pWwYykcqA" title="XPhone Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLadOS 15 X Edition | Released October 2025 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MyPhone 2.0E */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/myphone2e.png" className="img-fluid rounded-4" alt="MyPhone 2.0E" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">MyPhone 2.0E</h3>
                    <p className="text-on-surface-variant">Our Best Ever Smartphone. At Our Best Ever Price.<br /><br />Designed by MyLad, hand crafted by our professionals.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/yJFmL5Ur7AU" title="MyPhone 2.0E Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLadOS 3.1 | Released December 2022 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MyPhone 2.0 */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/myphone2.png" className="img-fluid rounded-4" alt="MyPhone 2.0" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">MyPhone 2.0</h3>
                    <p className="text-on-surface-variant">Our Best Ever Smartphone.<br /><br />Designed by MyLad, hand crafted by our professionals.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                    <p className="text-primary mt-2">**FACES BOOKS CERTIFIED**</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/JmPv0LmlmuM" title="MyPhone 2.0 Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLadOS 3.0 | Released April 2022 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MyPhone E */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/myphonee.png" className="img-fluid rounded-4" alt="MyPhone E" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">MyPhone E</h3>
                    <p className="text-on-surface-variant">Our First Smartphone, But On A Budget.<br /><br />Designed by MyLad, hand crafted by our professionals.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/Jfb3JyUKggI" title="MyPhone E Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLadOS 2.5 | Released June 2021 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MyPhone */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="card-img-wrapper text-center mb-4">
                  <img src="/assets/pics/hitech/products/myphone.png" className="img-fluid rounded-4" alt="MyPhone" style={{ maxHeight: '300px', objectFit: 'contain' }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h3 text-white fw-bold mb-2">MyPhone</h3>
                    <p className="text-on-surface-variant">Our First Smartphone.<br /><br />Designed by MyLad, hand crafted by our professionals.</p>
                    <p className="subtitle mt-3 fst-italic text-outline">we love to make products that inspire creative and help people keep productive.</p>
                  </div>
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-4 shadow-sm card">
                    <iframe src="https://www.youtube.com/embed/mL6l87z3E7g" title="MyPhone Promo" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="small mb-0 text-on-surface-variant">
                      <strong>Details:</strong> Runs MyLadOS 2.2 | Released April 2021 | Manufactured in China
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Skeleton subpages matching the original empty structure
export function HiTechTablets() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <h1 className="text-white display-4 fw-bold">Tablets</h1>
      <p className="text-on-surface-variant mt-3 fs-5">Check back soon for the latest Tablets by HiTech.</p>
      <div className="mt-5"><Link to="/hitech" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Back to HiTech</Link></div>
    </div>
  );
}

export function HiTechConsoles() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <h1 className="text-white display-4 fw-bold">Consoles</h1>
      <p className="text-on-surface-variant mt-3 fs-5">Check back soon for the latest gaming consoles.</p>
      <div className="mt-5"><Link to="/hitech" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Back to HiTech</Link></div>
    </div>
  );
}

export function HiTechComputers() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <h1 className="text-white display-4 fw-bold">Computers</h1>
      <p className="text-on-surface-variant mt-3 fs-5">Check back soon for the latest computing power by HiTech.</p>
      <div className="mt-5"><Link to="/hitech" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Back to HiTech</Link></div>
    </div>
  );
}

export function HiTechTelevisions() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <h1 className="text-white display-4 fw-bold">Televisions</h1>
      <p className="text-on-surface-variant mt-3 fs-5">Check back soon for the latest high definition TVs.</p>
      <div className="mt-5"><Link to="/hitech" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Back to HiTech</Link></div>
    </div>
  );
}

// Checkout Flows
export function HiTechBuyX() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hitech/buynow/purchase');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container text-center" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <h1 className="text-warning fw-bold mb-4 fs-3">
        <u><b><i>You will now be redirected in 3 seconds to our product purchasing website operated by MyLad to purchase this product.</i></b></u>
      </h1>
      <div className="spinner-border text-primary-custom mt-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export function HiTechPurchase() {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hitech/buynow/confirmPurchase', { state: { product } });
  };

  return (
    <div className="container py-5 text-center" style={{ minHeight: '80vh', maxWidth: '600px', marginTop: '100px' }}>
      <h1 className="fw-bold mb-2 text-white">mylad-gurgland.net Product purchase website</h1>
      <h2>--------------------------------</h2>
      <p className="text-on-surface-variant mt-4 mb-4">
        hi please put email phone fax card detail address and date of birth in form to purchase product from mylad-gurgland.net websiteform
      </p>

      <form onSubmit={handleSubmit} className="text-start bg-dark p-4 rounded-4 shadow-lg border border-secondary" style={{ backgroundColor: 'rgba(20,22,25,0.7) !important' }}>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">PLEASE TYPE NAME OF PRODUCT YOU BUY ---&gt;:*</label>
          <input type="text" className="form-control bg-black text-white border-secondary" required value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">NAME: in FUL*</label>
          <input type="text" className="form-control bg-black text-white border-secondary" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">Email:*</label>
          <input type="email" className="form-control bg-black text-white border-secondary" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">phone:*</label>
          <input type="text" className="form-control bg-black text-white border-secondary" required />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">fAx:[optional]:</label>
          <input type="text" className="form-control bg-black text-white border-secondary" />
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">credit card no xxxx xxxx xxxx xxxx:*</label>
          <input type="text" className="form-control bg-black text-white border-secondary" required />
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label className="form-label text-white fw-bold">expiry date xx/yy:*</label>
            <input type="text" className="form-control bg-black text-white border-secondary" placeholder="MM/YY" required />
          </div>
          <div className="col-6 mb-3">
            <label className="form-label text-white fw-bold">security no xxx:*</label>
            <input type="text" className="form-control bg-black text-white border-secondary" required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold">date of birth*</label>
          <input type="text" className="form-control bg-black text-white border-secondary" required />
        </div>
        <div className="mb-4">
          <label className="form-label text-white fw-bold">ADDRESS*:</label>
          <textarea className="form-control bg-black text-white border-secondary" rows="3" required></textarea>
        </div>

        <button type="submit" className="btn btn-card w-100 py-2 rounded-pill font-semibold">CONFIRM</button>
      </form>

      <p className="mt-5 small text-outline">
        copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intellectual property of MyLad Inc.
      </p>
    </div>
  );
}

export function HiTechConfirmPurchase() {
  const navigate = useNavigate();
  return (
    <div className="container py-5 text-center" style={{ minHeight: '65vh', marginTop: '100px' }}>
      <h1 className="fw-bold mb-2 text-white">mylad-gurgland.net Product purchase website</h1>
      <h2>--------------------------------</h2>
      <p className="fs-4 text-white mt-5 mb-5">YOU ABOUT TO PAY €money for product. WOULD YOU LIKE TO CONTINUE.</p>
      
      <div className="d-flex justify-content-center gap-3">
        <button onClick={() => navigate('/hitech/buynow/thanksPurchase')} className="btn btn-card px-5 py-2 rounded-pill font-semibold">YES</button>
        <button onClick={() => navigate('/hitech/buynow/thanksPurchase')} className="btn btn-card px-5 py-2 rounded-pill font-semibold">YES</button>
      </div>

      <p className="mt-5 pt-5 small text-outline">
        copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intellectual property of MyLad Inc.
      </p>
    </div>
  );
}

export function HiTechThanksPurchase() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '65vh', marginTop: '100px' }}>
      <h1 className="fw-bold mb-2 text-white">mylad-gurgland.net Product purchase website</h1>
      <h2>--------------------------------</h2>
      <p className="fs-4 text-white mt-5 mb-5">
        thank .! you pay for product from HiTech website. you get e-mail within the next 10 hours for receipt. product now be delivered to your door within 12 months.!
      </p>
      
      <div className="mb-4">
        <Link to="/hitech" className="btn btn-card px-5 py-2 rounded-pill font-semibold">🛖 Home</Link>
      </div>

      <div className="display-1 mb-5">👍</div>

      <p className="small text-outline">
        copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intellectual property of MyLad Inc.
      </p>
    </div>
  );
}
