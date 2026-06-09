import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScript from '../../hooks/useScript';

// Shared Tailwind header for macOS, Windows, and AutoUpdate pages
function TailwindHarmonyHeader({ activePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary-container shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-3">
          <Link className="flex items-center gap-2 text-decoration-none" to="/harmony">
            <img src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/hiosbadge.png" alt="Harmony Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-primary">Harmony</span>
          </Link>
          
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-on-primary-container hover:bg-primary/10 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link to="/harmony" className="px-3 py-2 text-on-primary-container hover:text-primary transition-colors text-decoration-none">Home</Link>
            <Link to="/harmony/android" className="px-3 py-2 text-on-primary-container hover:text-primary transition-colors text-decoration-none">For Android</Link>
            <Link to="/harmony/macos" className={`px-3 py-2 transition-colors text-decoration-none ${activePage === 'macos' ? 'text-primary font-semibold' : 'text-on-primary-container hover:text-primary'}`}>For macOS</Link>
            <Link to="/harmony/windows" className={`px-3 py-2 transition-colors text-decoration-none ${activePage === 'windows' ? 'text-primary font-semibold' : 'text-on-primary-container hover:text-primary'}`}>For Windows</Link>
            <a href="https://thehighlandcafe.github.io/harmony" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-on-primary-container hover:text-primary transition-colors text-decoration-none">For Web</a>
            <Link to="/harmony/himaterial" className="px-3 py-2 text-on-primary-container hover:text-primary transition-colors text-decoration-none">HiMaterial</Link>
            <Link to="/" className="text-sm text-outline hover:text-white transition-colors ml-4 text-decoration-none">← Back to HiEnterprises™</Link>
          </div>
        </div>
        
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link to="/harmony" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">Home</Link>
            <Link to="/harmony/android" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">For Android</Link>
            <Link to="/harmony/macos" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">For macOS</Link>
            <Link to="/harmony/windows" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">For Windows</Link>
            <a href="https://thehighlandcafe.github.io/harmony" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">For Web</a>
            <Link to="/harmony/himaterial" className="block px-3 py-2 rounded-md text-on-primary-container hover:bg-primary/10 hover:text-primary text-decoration-none">HiMaterial</Link>
            <hr className="border-outline/50 my-2" />
            <Link to="/" className="block px-3 py-2 rounded-md text-outline hover:bg-primary/10 text-decoration-none">← Back to HiEnterprises™</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

// Inlined Tailwind config matching the legacy tailwind-config-harmony.js
const harmonyTailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary': '#a0c9ff',
          'on-primary': '#00325a',
          'primary-container': '#253141',
          'on-primary-container': '#d2e4ff',
          'secondary': '#bbc7db',
          'on-secondary': '#253141',
          'tertiary': '#d7bde4',
          'on-tertiary': '#3b2947',
          'tertiary-container': '#533f5f',
          'on-tertiary-container': '#f3daff',
          'background': '#1a1c1e',
          'on-background': '#e3e2e6',
          'surface': '#1a1c1e',
          'on-surface': '#e3e2e6',
          'outline': '#8d9199',
          'surface-variant': '#43474e',
          'on-surface-variant': '#c3c6cf',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        }
      }
    }
  }
`;

export function HarmonyHome() {
  return (
    <main>
      <section className="hero-section" style={{ height: '100vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">Harmony</h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">by The Highland Cafe™</p>
        </div>
      </section>
      
      <section className="py-5 container text-center">
        <div className="row justify-content-center animate-fade-in">
          <div className="col-lg-10">
            <h2 className="display-4 fw-bold text-primary-custom mb-3">Welcome to the greatest digital experiences.</h2>
            <p className="fs-4 text-on-surface-variant">From The Highland Cafe™, welcome to Harmony.</p>
          </div>
        </div>
      </section>
      
      <section className="py-5 container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="fw-bold text-on-surface">Downloads</h2>
        </div>
        
        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-5">
            <div className="card h-100 bg-primary-container border-0 overflow-hidden shadow-lg hover-lift animate-fade-in">
              <img src="/assets/pics/harmony/android.jpg" className="card-img-top object-fit-cover" alt="Android Interface" style={{ aspectRatio: '16/9' }} />
              <div className="card-body p-4">
                <h3 className="h4 fw-bold text-primary mb-3">Harmony for Android</h3>
                <p className="text-on-primary-container mb-4">Our main app for Android! It is the best place to order food and more at The Highland Cafe™ brands!</p>
                <Link to="/harmony/android" className="btn btn-nav-cta px-4 py-2 rounded-pill shadow-sm">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-5">
            <div className="card h-100 bg-primary-container border-0 overflow-hidden shadow-lg hover-lift animate-fade-in delay-100">
              <img src="/assets/pics/harmony/web.jpg" className="card-img-top object-fit-cover" alt="Web Browser Interface" style={{ aspectRatio: '16/9' }} />
              <div className="card-body p-4">
                <h3 className="h4 fw-bold text-primary mb-3">Harmony for Web</h3>
                <p className="text-on-primary-container mb-4">Our main app for the Web! It is the best place to order food and more at The Highland Cafe™ brands!</p>
                <a href="https://thehighlandcafe.github.io/harmony" target="_blank" rel="noopener noreferrer" className="btn btn-nav-cta px-4 py-2 rounded-pill shadow-sm">Visit Website</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 container">
        <hr className="border-secondary opacity-25 my-5 w-75 mx-auto" />
        
        <div className="row g-5 align-items-start">
          <div className="col-md-6 animate-fade-in">
            <h2 className="h3 fw-bold text-primary-custom mb-3">Looking for the new HiCard app?</h2>
            <p className="text-on-surface-variant mb-4">Although developed by the Harmony team, HiCard is a separate service. You can download the HiCard app now.</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="https://github.com/aarjay123/hicard" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary rounded-pill fw-semibold shadow-sm hover-scale">HiCard for Android</a>
              <a href="https://thehighlandcafe.github.io/hicard/" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary rounded-pill fw-semibold shadow-sm hover-scale">HiCard for Web</a>
            </div>
          </div>
          
          <div className="col-md-6 animate-fade-in delay-100">
            <h2 className="h3 fw-bold text-primary-custom mb-3">Looking for HiOSMobile?</h2>
            <p className="text-on-surface-variant mb-4">HiOSMobile will soon be deprecated in favour of the new Harmony apps. You can find out more from the old HiOSMobile site below.</p>
            <div className="mt-2">
              <Link to="/hiosmobile" className="btn btn-tertiary rounded-pill fw-semibold shadow-sm hover-scale">HiOSMobile Site</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 container pb-5 mb-5">
        <hr className="border-secondary opacity-25 my-5 w-75 mx-auto" />
        
        <div className="text-center animate-fade-in">
          <h2 className="fw-bold text-on-surface mb-3">Our apps are open source.</h2>
          <p className="fs-5 text-on-surface-variant mx-auto" style={{ maxWidth: '700px' }}>Until recently, only HarmonyCore has been open source. Since late August 2023, we have made the extra effort to publish all our source code on GitHub.</p>
        </div>
        
        <div className="row justify-content-center mt-5 animate-fade-in delay-100">
          <div className="col-lg-6">
            <div className="card border border-secondary rounded-4 overflow-hidden shadow-sm">
              <div className="list-group list-group-flush">
                <a href="https://github.com/aarjay123/harmonyapp" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-secondary d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5">Harmony</span>
                  <span className="text-outline fs-4">→</span>
                </a>
                <a href="https://github.com/thehighlandcafe/hioswebcore" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-0 d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5">HarmonyCore</span>
                  <span className="text-outline fs-4">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HarmonyAndroid() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">Harmony for Android</h1>
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex align-items-start gap-4 mb-5">
              <img src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/hiosbadge.png" alt="Harmony Icon" className="rounded-4 shadow-sm" width="120" height="120" />
              <div>
                <h1 className="display-5 fw-bold text-on-surface mb-1">Harmony</h1>
                <p className="text-primary-custom fs-5 mb-2">The Highland Cafe™</p>
                <span className="badge bg-surface-variant text-on-surface-variant border border-secondary fw-normal px-3 py-2 rounded-pill">Productivity</span>
              </div>
            </div>

            <div className="d-grid gap-3 mb-5">
              <a href="https://github.com/aarjay123/harmonyapp/releases/latest/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-pill py-3 fw-bold shadow-lg">
                Download APK
              </a>
              <Link to="/harmony/autoupdate" className="text-center text-primary-custom fw-bold hover:underline">
                How to set up Auto-Updates 🚀
              </Link>
              <p className="text-center text-outline small">Compatible with Android 7.0+</p>
            </div>

            <hr className="border-secondary opacity-25 my-5" />

            <div className="mb-5">
              <h2 className="h4 fw-bold text-on-surface mb-3">About this app</h2>
              <p className="text-on-surface-variant lh-lg">
                Harmony is the ultimate companion app for all The Highland Cafe™ services. Order food, manage your account, and stay connected with everything HiEnterprises has to offer, all from a single, unified interface designed with our latest HarmonyUX design language.
              </p>
            </div>

            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 fw-bold text-on-surface mb-0">What's New</h2>
                <a href="https://github.com/aarjay123/harmonyapp/commits/" target="_blank" rel="noopener noreferrer" className="text-primary-custom text-decoration-none small fw-bold">Version History</a>
              </div>
              <div className="p-4 bg-surface-variant rounded-4">
                <p className="text-on-surface-variant mb-0">
                  Check out the latest updates and improvements on our GitHub repository. We are constantly working to improve your experience.
                </p>
              </div>
            </div>

            <div className="accordion border-0" id="installAccordion">
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-surface-variant text-on-surface rounded-4 shadow-sm fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    How to Install (Sideload)
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#installAccordion">
                  <div className="accordion-body bg-surface-variant mt-2 rounded-4 text-on-surface-variant">
                    <ol className="ps-3 mb-0">
                      <li className="mb-2">Download the <strong>.apk</strong> file from the latest GitHub release page using the button above.</li>
                      <li className="mb-2">Open the downloaded file from your notifications or File Manager.</li>
                      <li className="mb-2">If prompted, allow installation from "Unknown Sources" in your settings.</li>
                      <li className="mb-0">Tap <strong>Install</strong> and enjoy!</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-secondary opacity-25 my-5" />

            <div>
              <h2 className="h4 fw-bold text-on-surface mb-3">App Info</h2>
              <div className="row g-4">
                <div className="col-6">
                  <p className="text-outline small mb-1">Provider</p>
                  <p className="text-on-surface fw-medium">The Highland Cafe™</p>
                </div>
                <div className="col-6">
                  <p className="text-outline small mb-1">Compatibility</p>
                  <p className="text-on-surface fw-medium">Android 7.0+</p>
                </div>
                <div className="col-6">
                  <p className="text-outline small mb-1">Category</p>
                  <p className="text-on-surface fw-medium">Productivity</p>
                </div>
                <div className="col-6">
                  <p className="text-outline small mb-1">Language</p>
                  <p className="text-on-surface fw-medium">English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HarmonyAutoUpdate() {
  // Load Tailwind and config dynamically for this Tailwind-based page
  useScript('https://cdn.tailwindcss.com', 'tailwind-cdn');
  useScript(null, 'tailwind-config-harmony', harmonyTailwindConfig);

  return (
    <div className="bg-background text-on-background font-sans min-h-screen">
      <TailwindHarmonyHeader />
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center text-white p-4" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}>
            <div className="relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold text-primary">Auto-Update with Obtainium</h1>
              <p className="text-xl mt-2 text-on-primary-container">The recommended way to keep Harmony for Android up-to-date.</p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">How to Set Up Auto-Updates</h2>
            <p className="text-center text-on-surface-variant">Obtainium is a free and open-source app that allows you to automatically download and install updates for your apps directly from their source. This is the easiest way to keep Harmony up-to-date without having to manually check for new versions.</p>
            
            <ol className="mt-8 space-y-4 text-start">
              <li className="bg-surface-variant p-4 rounded-lg">
                <div className="font-bold text-on-background">1. Install Obtainium</div>
                <p className="mt-1 text-on-surface-variant">First, you need to install <b>Obtainium</b> on your Android device. You can download the latest APK directly from their official GitHub page.</p>
                <a href="https://github.com/ImranR98/Obtainium/releases/latest" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 border border-primary text-primary text-sm font-semibold py-1 px-3 rounded-md hover:bg-primary/10 transition-colors">Download Obtainium</a>
              </li>
              <li className="bg-surface-variant p-4 rounded-lg">
                <div className="font-bold text-on-background">2. Add Harmony</div>
                <p className="mt-1 text-on-surface-variant">Open Obtainium and tap the floating <b>Add App</b> button (the '+' icon) at the bottom right of the screen.</p>
              </li>
              <li className="bg-surface-variant p-4 rounded-lg">
                <div className="font-bold text-on-background">3. Enter the App Source URL</div>
                <p className="mt-1 text-on-surface-variant">In the "App Source URL" field, enter the URL for Harmony's GitHub repository:</p>
                <code className="block select-all bg-primary-container text-on-primary-container p-2 rounded-md my-2 font-mono text-sm">https://github.com/aarjay123/harmonyapp</code>
              </li>
              <li className="bg-surface-variant p-4 rounded-lg">
                <div className="font-bold text-on-background">4. Confirm and Add</div>
                <p className="mt-1 text-on-surface-variant">Obtainium will automatically fetch the app's details from GitHub. Review the information and tap the <b>Add</b> button at the bottom to finalize. You can also configure advanced options here if you wish.</p>
              </li>
              <li className="bg-surface-variant p-4 rounded-lg">
                <div className="font-bold text-on-background">5. All Set!</div>
                <p className="mt-1 text-on-surface-variant">That's it! Harmony is now being tracked by Obtainium. The app will periodically check for new releases in the background and send you a notification when an update is ready to be installed.</p>
              </li>
            </ol>

            <div className="text-center mt-12">
              <Link to="/harmony/android" className="inline-block bg-primary text-on-primary font-semibold py-3 px-8 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors shadow-lg text-decoration-none">Back to the Main Android Page</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-primary-container/50 py-8 mt-12 text-center text-outline">
        <p>© 2021-2025 The Highland Cafe™ Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export function HarmonyHiMaterial() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">HarmonyUX</h1>
        </div>
      </section>

      <div className="container py-5">
        <section className="text-center mb-5 animate-fade-in">
          <h2 className="display-4 fw-bold text-primary-custom mb-3">Welcome to the future of UX.</h2>
          <p className="fs-4 text-on-surface-variant">Welcome to HarmonyUX</p>
        </section>

        <div className="row justify-content-center mb-5 animate-fade-in delay-100">
          <div className="col-lg-10">
            <div className="card bg-primary-container border-0 shadow-lg rounded-4 p-4">
              <div className="card-body">
                <h3 className="h2 fw-bold text-primary mb-3">What is HarmonyUX?</h3>
                <p className="fs-5 text-on-primary-container lh-lg mb-0">
                  HarmonyUX is the core design philosophy for every app by The Highland Cafe™️ Enterprises in active development. Inspired loosely by Google's Material Design v3, we strive to create and communicate a pleasant and visually appealing experience to all our customers when they use our apps and software experiences. A replacement for HiOSUX and HiMaterial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary opacity-25 my-5" />

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="mb-5 animate-fade-in">
              <h2 className="h2 fw-bold text-on-surface mb-4 border-bottom border-secondary pb-2 d-inline-block">HarmonyUX Era</h2>
              <div className="card border-0 bg-surface-variant rounded-4 mb-4">
                <div className="card-body p-4">
                  <h3 className="h3 fw-bold text-primary-custom">HarmonyUX 1</h3>
                  <p className="text-on-surface-variant mb-0">HarmonyUX 1 was released in November 2025 and was the first version of our new Harmony design language that replaced Google's Material 3 (used in versions 3.0.0 - 3.4.1), and HiMaterial used on HiOSMobile (versions 1.0 - 2.6.2.2). Defined by its sliver layouts, rounded cards, and coloured shadows at the tops of pages, it is the latest and greatest in design by the nuggetdev team.</p>
                </div>
              </div>
            </section>

            <section className="animate-fade-in delay-100">
              <h2 className="h2 fw-bold text-on-surface mb-4 border-bottom border-secondary pb-2 d-inline-block">HiMaterial Era</h2>
              
              <div className="mb-5 text-start">
                <h3 className="h3 fw-bold text-on-surface mb-3">HiMaterial 6</h3>
                <p className="text-on-surface-variant mb-4 font-sans text-start">
                  HiMaterial 6 was a massive overhaul of HiOSMobile's design language; HiMaterial 6 was designed with inspiration taken from Google's leaked upcoming Material 3 Expressive design, and HiMaterial 2. HiMaterial 6 had all of the refinements made in all of version 5's updates, but with the added design changes of 6.<br /><br />
                  This update re-introduced the concept to HiOSCore of a background image with blurred cards, which were last present in HiMaterial 2. There are a list of pre-defined wallpapers, but users can upload their own.<br /><br />
                  The font was also changed back to Outfit, and every component was converted to Bootstrap (from v5.3).
                </p>
                <div className="row g-3">
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/1.png" alt="HiMaterial 6 Home" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/2.png" alt="HiMaterial 6 Top Page" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/3.png" alt="HiMaterial 6 Sub Page" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/4.png" alt="HiMaterial 6 Hotel" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/5.png" alt="HiMaterial 6 Settings" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/6.png" alt="HiMaterial 6 Backgrounds" /></div>
                </div>
              </div>

              <div className="mb-5 text-start">
                <h3 className="h3 fw-bold text-on-surface mb-3">HiMaterial 5.2</h3>
                <p className="text-on-surface-variant mb-4">
                  HiMaterial 5.2 was another minor, but meaningful design language update. We decided to change the bottom navigation bar to be docked to the bottom, but rounded at each corner, to give a more visually pleasing feeling. We also did this because the system navigation bar was black, which didn't look very good with the white floating nav bar in light mode.<br /><br />
                  We also changed the font family of the app and HiOSWebCore to SUSE from Outfit, to make it in line with all of The Highland Cafe™️ Enterprises' other projects.<br /><br />
                  We have also updated some design elements such as the bottom 'More' flyout in HiOSMobile Lite to match its Android app counterpart.
                </p>
                <div className="row g-3">
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-1.png" alt="HiMaterial 5.2 Home" /></div>
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-2.png" alt="HiMaterial 5.2 Restaurant" /></div>
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-3.png" alt="HiMaterial 5.2 Hotel" /></div>
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-5.png" alt="HiMaterial 5.2 Settings" /></div>
                </div>
              </div>

              <div className="mb-5 text-start">
                <h3 className="h3 fw-bold text-on-surface mb-3">HiMaterial 5.1</h3>
                <p className="text-on-surface-variant mb-4">
                  HiMaterial 5.1 was more of a minor update based on HiMaterial 5, with minor but welcome improvements and tweaks to the overall design language. With this design update, we have made tweaks such as changing the new Dashboard screen back to the original Homescreen, changing the button designs, applying custom colours to specific brand pages such as weB&B (formerly WorstEastern) where we changed the theme to green to match the brand's colour scheme, streamlined the HiMaterial CSS files, making all the corners more rounded, and making the design more accessible.
                </p>
                <div className="row g-3">
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-1.png" alt="HiMaterial 5.1 Home" /></div>
                  <div className="col-6 col-md-3"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-3.png" alt="HiMaterial 5.1 Hotel" /></div>
                </div>
              </div>

              <div className="mb-5 text-start">
                <h3 className="h3 fw-bold text-on-surface mb-3">HiMaterial 5</h3>
                <p className="text-on-surface-variant mb-4">
                  HiMaterial 5 was a huge update that bridged the gap between Google's Material Design v3, and the HiOSMobile app design. With this new HiMaterial 5 design, it came with the new top navigation back buttons, and the left-aligned titles. This update also brought the new high-quality native buttons, and departs from the png navigation buttons at the bottom and top. We also changed some of our design elements recently to better match the Material 3 guidelines, and we made the CSS design files more streamlined with variables defining colours rather than defining them over and over again for every element. Around the time of creating this iteration of HiMaterial, we also created native Settings, Help Center, and feedback pages. We went through a few different fonts with this design, such as Cantarell and Prompt, but we settled on Outfit since it fitted the rest of the The Highland Cafe™️ Enterprises' design philosophy at the time.
                </p>
                <div className="row g-3">
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-1.png" alt="HiMaterial 5 Example" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-2.png" alt="HiMaterial 5 Example" /></div>
                  <div className="col-6 col-md-4"><img className="img-fluid rounded-3 shadow-sm hover-lift" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-4.png" alt="HiMaterial 5 Example" /></div>
                </div>
              </div>

              <div className="row g-4 text-start">
                <div className="col-md-6">
                  <div className="card h-100 bg-surface-variant border-0 rounded-4">
                    <div className="card-body">
                      <h4 className="h5 fw-bold text-on-surface">HiMaterial 4</h4>
                      <p className="small text-on-surface-variant">HiMaterial 4 had less major design updates, and was a very welcome refinement based on user feedback on HiMaterial 3. This update included a fully light light-mode, and a fully dark dark-mode.</p>
                      <img className="img-fluid rounded-3 mt-2 shadow-sm" src="/assets/pics/hiosmobile-site/himaterial/hiosunified2.png" alt="HiOS Unified 2" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 bg-surface-variant border-0 rounded-4">
                    <div className="card-body">
                      <h4 className="h5 fw-bold text-on-surface">HiMaterial 3</h4>
                      <p className="small text-on-surface-variant">HiMaterial 3 was a game changing update to the design language of HiOSMobile. This included the debut of the HiOSMobile dark theme, along with the first opaque card-focused design, that made the app look properly professional for the first time.</p>
                      <div className="row g-2 mt-2">
                        <div className="col-6"><img className="img-fluid rounded-3 shadow-sm" src="/assets/pics/hiosmobile-site/himaterial/himaterial3.1.png" alt="HM3" /></div>
                        <div className="col-6"><img className="img-fluid rounded-3 shadow-sm" src="/assets/pics/hiosmobile-site/himaterial/himaterial3.2.png" alt="HM3" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 bg-surface-variant border-0 rounded-4">
                    <div className="card-body">
                      <h4 className="h5 fw-bold text-on-surface">HiMaterial 2</h4>
                      <p className="small text-on-surface-variant">HiMaterial 2 was the second iteration of our new design language; HiMaterial 2 debuted on HiOSMobile version 1.2, and the new HiOSUnified software.</p>
                      <img className="img-fluid rounded-3 mt-2 shadow-sm" src="/assets/pics/hiosmobile-site/himaterial/hiosunified.png" alt="HM2" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 bg-surface-variant border-0 rounded-4">
                    <div className="card-body">
                      <h4 className="h5 fw-bold text-on-surface">HiMaterial 1</h4>
                      <p className="small text-on-surface-variant">HiMaterial 1 was released in December 2021 and was the first version of our new HiMaterial design language that replaced HiOSUX, which was used on the first version of HiOSDesktop.</p>
                      <img className="img-fluid rounded-3 mt-2 shadow-sm w-50 mx-auto d-block" src="/assets/pics/hiosmobile-site/himaterial/himaterial1.png" alt="HM1" />
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export function HarmonyMacOS() {
  useScript('https://cdn.tailwindcss.com', 'tailwind-cdn');
  useScript(null, 'tailwind-config-harmony', harmonyTailwindConfig);

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-sans min-h-screen">
      <TailwindHarmonyHeader activePage="macos" />
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center text-white p-4" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}>
            <div className="relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold">Harmony for macOS</h1>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 lg:px-6 py-16 space-y-16">
          <section>
            <div className="max-w-4xl mx-auto border border-outline/20 rounded-lg text-start">
              <div>
                <h2>
                  <button 
                    onClick={() => setOpen(!open)}
                    type="button" 
                    className="flex justify-between items-center w-full p-5 font-medium text-left text-on-background bg-surface-variant hover:bg-primary-container/50 transition-colors border-0"
                  >
                    <span>How to Download & Install Harmony for macOS</span>
                    <svg className={`w-6 h-6 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h2>
                {open && (
                  <div className="p-5 border-t border-outline/20">
                    <ol className="list-decimal list-inside space-y-4 text-on-surface-variant">
                      <li>On your macOS device, open this website and download the latest <b className="font-semibold text-on-background">harmony-macos.zip</b> file from the releases tab <a href="https://github.com/aarjay123/harmonyapp/releases/latest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.</li>
                      <li>Once downloaded, unzip the file. This will create a new folder containing the Harmony macOS Application file.</li>
                      <li>Drag and drop the Harmony file into your <b className="font-semibold text-on-background">Applications</b> folder.</li>
                      <li>Open your <b className="font-semibold text-on-background">Applications</b> folder and double-click Harmony to launch it. You may need to grant permissions the first time you open an app downloaded outside the App Store (go to <b className="font-semibold text-on-background">System Settings &gt; Privacy &amp; Security</b> if prompted).</li>
                    </ol>
                    <p className="italic text-sm text-outline mt-6">*Please note that an internet connection is required to access all HarmonyCore services.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-4xl font-bold text-primary">Download Harmony for macOS</h2>
            <p className="mt-2 text-on-surface-variant">Compatible with macOS devices running macOS 10.15 (Catalina) and above.</p>
            <div className="mt-6">
              <a href="https://github.com/aarjay123/harmonyapp/releases/latest/download/harmony-macos.zip" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary font-semibold py-3 px-8 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors shadow-lg text-decoration-none">Download Latest Version (ZIP)</a>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold">What's New?</h2>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/aarjay123/harmonyapp/commits/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-primary text-primary font-semibold py-2 px-6 rounded-lg hover:bg-primary/10 transition-colors text-decoration-none">Harmony App GitHub Changelog</a>
              <a href="https://github.com/thehighlandcafe/hioswebcore/commits/main" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-primary text-primary font-semibold py-2 px-6 rounded-lg hover:bg-primary/10 transition-colors text-decoration-none">HarmonyCore GitHub Changelog</a>
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-3xl font-bold text-primary">Introducing our new design language, HiMaterial 6!</h2>
            <p className="mt-2 max-w-2xl text-on-surface-variant mx-auto">To find out more, check below.</p>
            <div className="mt-6">
              <Link to="/harmony/himaterial" className="inline-block bg-primary text-on-primary font-semibold py-2 px-6 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors text-decoration-none">Learn about HiMaterial</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-primary-container/50 py-8 mt-12 text-center text-outline">
        <p>© 2021-2025 The Highland Cafe™ Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export function HarmonyWindows() {
  useScript('https://cdn.tailwindcss.com', 'tailwind-cdn');
  useScript(null, 'tailwind-config-harmony', harmonyTailwindConfig);

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-sans min-h-screen">
      <TailwindHarmonyHeader activePage="windows" />
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center text-white p-4" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}>
            <div className="relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold">Harmony for Windows</h1>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 lg:px-6 py-16 space-y-16">
          <section>
            <div className="max-w-4xl mx-auto border border-outline/20 rounded-lg text-start">
              <div>
                <h2>
                  <button 
                    onClick={() => setOpen(!open)}
                    type="button" 
                    className="flex justify-between items-center w-full p-5 font-medium text-left text-on-background bg-surface-variant hover:bg-primary-container/50 transition-colors border-0"
                  >
                    <span>How to Download & Install Harmony for Windows</span>
                    <svg className={`w-6 h-6 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h2>
                {open && (
                  <div className="p-5 border-t border-outline/20">
                    <ol className="list-decimal list-inside space-y-4 text-on-surface-variant">
                      <li>On your Windows device, open this website and download the latest <b className="font-semibold text-on-background">harmony-windows.zip</b> file from the releases tab <a href="https://github.com/aarjay123/harmonyapp/releases/latest" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.</li>
                      <li>Once downloaded, unzip the file. This will create a new folder containing the Harmony application and its dependencies.</li>
                      <li>You can place this folder anywhere on your computer, such as your Program Files directory or your Desktop. We recommend also creating a shortcut either on your desktop or in your start menu folder to quickly access Harmony.</li>
                      <li>Open the Harmony folder and double-click the <b className="font-semibold text-on-background">`Harmony.exe`</b> file to launch the application. You might be prompted by Windows Defender SmartScreen; click "More info" then "Run anyway" since the app is safe and open-source.</li>
                    </ol>
                    <p className="italic text-sm text-outline mt-6">*Please note that an internet connection is required to access all HarmonyCore services.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-4xl font-bold text-primary">Download Harmony for Windows</h2>
            <p className="mt-2 text-on-surface-variant">Compatible with Windows devices running Windows 10 and above.</p>
            <div className="mt-6">
              <a href="https://github.com/aarjay123/harmonyapp/releases/latest/download/harmony-windows.zip" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary font-semibold py-3 px-8 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors shadow-lg text-decoration-none">Download Latest Version (ZIP)</a>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold">What's New?</h2>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/aarjay123/harmonyapp/commits/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-primary text-primary font-semibold py-2 px-6 rounded-lg hover:bg-primary/10 transition-colors text-decoration-none">Harmony App GitHub Changelog</a>
              <a href="https://github.com/thehighlandcafe/hioswebcore/commits/main" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-primary text-primary font-semibold py-2 px-6 rounded-lg hover:bg-primary/10 transition-colors text-decoration-none">HarmonyCore GitHub Changelog</a>
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-3xl font-bold text-primary">Introducing our new design language, HiMaterial 6!</h2>
            <p className="mt-2 max-w-2xl text-on-surface-variant mx-auto">To find out more, check below.</p>
            <div className="mt-6">
              <Link to="/harmony/himaterial" className="inline-block bg-primary text-on-primary font-semibold py-2 px-6 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors text-decoration-none">Learn about HiMaterial</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-primary-container/50 py-8 mt-12 text-center text-outline">
        <p>© 2021-2025 The Highland Cafe™ Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
