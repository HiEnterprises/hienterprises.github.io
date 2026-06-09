import React from 'react';
import { Link } from 'react-router-dom';

export function HiOSMobileHome() {
  return (
    <main>
      <section className="hero-section" style={{ height: '100vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">HiOSMobile</h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">by The Highland Cafe™</p>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center animate-fade-in">
          <div className="col-lg-10">
            <h2 className="display-4 fw-bold text-primary-custom mb-3">Welcome to the greatest digital experience from The Highland Cafe™.</h2>
            <p className="fs-4 text-on-surface-variant">Welcome to HiOSMobile.</p>
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
              <div className="card-img-wrapper">
                <img src="/assets/pics/hiosmobile-site/home/full.png" className="card-img-top" alt="Android full" />
              </div>
              <div className="card-body p-4 text-center">
                <h3 className="h4 fw-bold text-primary mb-3">HiOSMobile for Android</h3>
                <p className="card-text text-on-surface-variant">Our main app for Android! It is the best place to order food and more at The Highland Cafe™ brands!</p>
                <Link to="/hiosmobile/download" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Download HiOSMobile</Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-5">
            <div className="card h-100 bg-primary-container border-0 overflow-hidden shadow-lg hover-lift animate-fade-in delay-100">
              <div className="card-img-wrapper">
                <img src="/assets/pics/hiosmobile-site/home/lite.png" className="card-img-top" alt="Web lite" />
              </div>
              <div className="card-body p-4 text-center">
                <h3 className="h4 fw-bold text-primary mb-3">HiOSMobile for Web</h3>
                <p className="card-text text-on-surface-variant">Do you have an iPhone or a Windows Phone? Try HiOSMobile Lite that runs entirely in your browser!</p>
                <Link to="/hiosmobile/lite" className="btn btn-card px-4 py-2 rounded-pill shadow-sm">Visit Website</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 container pb-5 mb-5">
        <hr className="border-secondary opacity-25 my-5 w-75 mx-auto" />
        <div className="text-center animate-fade-in">
          <h2 className="fw-bold text-on-surface mb-3">Our apps are open source.</h2>
          <p className="fs-5 text-on-surface-variant mx-auto" style={{ maxWidth: '700px' }}>
            Until recently, only HiOSWebCore has been open source and available to look at on GitHub.
            Since late August 2023 we have made the extra effort to publish all our source code on GitHub.
          </p>
        </div>

        <div className="row justify-content-center mt-5 animate-fade-in delay-100">
          <div className="col-lg-6">
            <div className="card border border-secondary rounded-4 overflow-hidden shadow-sm">
              <div className="list-group list-group-flush">
                <a href="https://github.com/aarjay123/harmony" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-secondary d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5 text-white">HiOSMobile for Android</span>
                  <span className="text-outline fs-4">→</span>
                </a>
                <a href="https://github.com/aarjay123/hiosdesktop" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-secondary d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5 text-white">HiOSDesktop (development ceased)</span>
                  <span className="text-outline fs-4">→</span>
                </a>
                <a href="https://github.com/aarjay123/hioswebcore" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-secondary d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5 text-white">HiOSWebCore</span>
                  <span className="text-outline fs-4">→</span>
                </a>
                <a href="https://github.com/aarjay123/hiosmobileweb" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action bg-surface-variant text-on-surface border-secondary d-flex justify-content-between align-items-center p-4 transition-colors">
                  <span className="fw-semibold fs-5 text-white">HiOSMobile Lite</span>
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

export function HiOSMobileDownload() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">Download HiOSMobile</h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">for Android</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex align-items-start gap-4 mb-5">
              <img src="https://thehighlandcafe.github.io/hioswebcore/assets/pics/logos/hiosbadge.png" alt="Harmony Icon" className="rounded-4 shadow-sm" width="120" height="120" />
              <div>
                <h2 className="display-5 fw-bold text-on-surface mb-1">HiOSMobile</h2>
                <p className="text-primary-custom fs-5 mb-2">The Highland Cafe™</p>
                <span className="badge bg-surface-variant text-on-surface-variant border border-secondary fw-normal px-3 py-2 rounded-pill">Hotel & Restaurant</span>
              </div>
            </div>

            <div className="d-grid gap-3 mb-5">
              <a href="https://github.com/aarjay123/harmony/releases/latest/" className="btn btn-card btn-lg rounded-pill py-3 fw-bold shadow-lg">
                Download APK
              </a>
              <p className="text-center text-outline small">Compatible with Android 7.0+</p>
            </div>

            <hr className="border-secondary opacity-25 my-5" />

            <div className="mb-5">
              <h2 className="h4 fw-bold text-on-surface mb-3">About this app</h2>
              <p className="text-on-surface-variant lh-lg">
                HiOSMobile is the main app by The Highland Cafe™ Enterprises for doing everything related to our brands, ranging from ordering food and looking at menus at The Highland Cafe™️ to booking a room or using the digital room key at WorstEastern!
              </p>
            </div>

            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 fw-bold text-on-surface mb-0">What's New</h2>
                <a href="https://github.com/aarjay123/harmony/commits/" target="_blank" rel="noopener noreferrer" className="text-primary-custom text-decoration-none small fw-bold">Version History</a>
              </div>
              <div className="p-4 bg-surface-variant rounded-4">
                <p className="text-on-surface-variant mb-0">
                  Check out the latest updates and improvements on our GitHub repository. We are constantly working to improve HiOSMobile.
                </p>
              </div>
            </div>

            <div className="accordion border-0" id="installAccordion">
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header">
                  <button class="accordion-button collapsed bg-surface-variant text-on-surface rounded-4 shadow-sm fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    How to Install (Sideload)
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#installAccordion">
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
                  <p className="text-on-surface fw-medium">Hotel & Restaurant</p>
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

export function HiOSMobileLite() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">Try HiOSMobile Lite</h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">for any modern internet-capable device</p>
        </div>
      </section>

      <section className="container mt-5">
        <img className="img-fluid w-100 rounded-4" src="/assets/pics/hiosmobile-site/lite/banner.png" alt="Lite banner" />
      </section>
      <section className="container mt-5 text-center">
        <h2 className="display-6 mb-3" style={{ fontWeight: 600 }}>Are you an iPhone user or a Windows Phone user?</h2>
        <h2 className="display-6 mb-5">You can use a web version of our app!</h2>
        <h3 className="lead mb-2 text-on-surface-variant">Try HiOSMobile Lite by The Highland Cafe™ Enterprises</h3>
        <p>Click the button below to try it out!</p>
        <div className="d-grid gap-2 col-md-6 mx-auto">
          <a className="btn btn-card px-4 py-2 rounded-pill shadow-sm" href="https://thehighlandcafe.github.io/hiosmobileweb" target="_blank" rel="noopener noreferrer">HiOSMobile Lite</a>
        </div>
      </section>
      <section className="container mt-5">
        <h2>Now Installable!</h2>
        <p className="mb-2">You can now install HiOSMobile Lite as if it was a native app, right from your browser!</p>
        <h3 className="mt-4">How to Install HiOSMobile Lite</h3>
        <h4 className="mt-2 text-primary-custom">On iPhone</h4>
        <ol className="list-group list-group-numbered mb-4">
          <li className="list-group-item bg-transparent text-white border-secondary">First, open this page in Safari.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">Tap on the blue button above that says 'HiOSMobile Lite'.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">Once you're on that page, tap the share icon at the bottom. Scroll down slightly, and you should see an "Add to Home Screen" option. Tap that.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">HiOSMobile Lite is now installed! You can launch it by going to the homescreen and tapping the 'HiOSMobile Lite' icon.</li>
        </ol>
        <h4 className="mt-4 text-primary-custom">On Android</h4>
        <p className="fst-italic text-outline">We recommend installing the full HiOSMobile app on Android for the best experience, however, you can still install this version instead.</p>
        <ol className="list-group list-group-numbered mb-4">
          <li className="list-group-item bg-transparent text-white border-secondary">First, open this page in Google Chrome.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">Tap on the blue button that says 'HiOSMobile Lite' above.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">There should be a popup banner at the bottom of the page that says 'Install'. Tap that. Alternatively, if that banner goes away, tap the three-dot icon at the top right of the screen, and tap Install.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">To access the app, just go to your home screen and tap on HiOSMobile Lite. It works almost as if it is a native Android app!</li>
        </ol>
        <h3 className="mt-4">How to update HiOSMobile Lite</h3>
        <h4 className="mt-2 text-primary-custom">On iPhone</h4>
        <ol className="list-group list-group-numbered mb-4">
          <li className="list-group-item bg-transparent text-white border-secondary">Remove 'HiOSMobile Lite' from the homescreen.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">Next, follow the steps above to re-install HiOSMobile Lite.</li>
        </ol>
        <h4 className="mt-4 text-primary-custom">On Android</h4>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item bg-transparent text-white border-secondary">Visit the HiOSMobile Lite website, via the big blue button above.</li>
          <li className="list-group-item bg-transparent text-white border-secondary">Tap the shield icon at the top left, then tap <strong>Site Data</strong>, then tap the bin icon to clear the site data.</li>
        </ol>
      </section>
    </main>
  );
}

export function HiOSMobileHiMaterial() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">HiMaterial</h1>
        </div>
      </section>

      <section className="container mt-5 py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-6 mb-3">Welcome to the future of UX.</h2>
            <h2 className="display-6" style={{ fontWeight: 600 }}>Welcome to HiMaterial.</h2>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-4">What is HiMaterial?</h2>
            <p className="text-on-surface-variant">
              HiMaterial is the core design philosophy for every app by The Highland Cafe™️ Enterprises.
              Inspired loosely by Google's Material Design v3, we strive to create and communicate a pleasant and visually appealing experience to all our customers when they use our apps and software experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-4 mb-4">HiMaterial Versions</h2>
            
            <h3>HiMaterial 1</h3>
            <p className="mb-4">
              HiMaterial 1 was released in December 2021 and was the first version of our new HiMaterial design language that replaced HiOSUX, which was used on the first version of HiOSDesktop.
            </p>
            <img className="img-fluid rounded-4 mb-5" style={{ maxWidth: '30%' }} src="/assets/pics/hiosmobile-site/himaterial/himaterial1.png" alt="v1" />
            
            <h3 className="mt-4">HiMaterial 2</h3>
            <p className="mb-4">
              HiMaterial 2 was the second iteration of our main design language; HiMaterial 2 debuted on HiOSMobile version 1.2, and the new HiOSUnified software.
            </p>
            <div className="d-flex flex-column gap-2 align-items-start mb-5">
              <img className="img-fluid rounded-4" style={{ maxWidth: '30%' }} src="/assets/pics/hiosmobile-site/himaterial/himaterial2.png" alt="v2" />
              <img className="img-fluid w-100 rounded-4 mt-2" src="/assets/pics/hiosmobile-site/himaterial/hiosunified.png" alt="v2 unified" />
            </div>
            
            <h3 className="mt-4">HiMaterial 3</h3>
            <p className="mb-4">
              HiMaterial 3 was a game changing update to the design language of HiOSMobile.
              This included the debut of the HiOSMobile dark theme, along with the first opaque card-focused design, that made the app look properly professional for the first time.<br /><br />
              <b>Wanting to test out HiMaterial 3? Try the legacy version of HiOSMobileWeb!</b><br />
              <a href="https://aarjay123.github.io/hiosmobileweb" target="_blank" rel="noopener noreferrer" className="text-primary-custom">HiOSMobileWeb with HiMaterial 3</a>
            </p>
            <div className="row mb-5">
              <div className="col-md-6">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial3.1.png" alt="HiMaterial 3.1" />
              </div>
              <div className="col-md-6">
                <img className="img-fluid mb-2 rounded-4" style={{ maxWidth: '55%' }} src="/assets/pics/hiosmobile-site/himaterial/himaterial3.2.png" alt="HiMaterial 3.2" />
              </div>
            </div>
            
            <h3 className="mt-4">HiMaterial 4</h3>
            <p className="mb-4">
              HiMaterial 4 had less major design updates, and was a very welcome refinement based on user feedback on HiMaterial 3.
              This update included a fully light light-mode, and a fully dark dark-mode.
            </p>
            <div className="row mb-2">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial4-1.png" alt="v4" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial4-2.png" alt="v4" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial4-3.png" alt="v4" />
              </div>
            </div>
            <img className="img-fluid w-100 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/hiosunified2.png" alt="unified 2" />
            <p className="text-center mt-2 mb-5">HiOSUnified2</p>
            
            <h3 className="mt-4">HiMaterial 5</h3>
            <p className="mb-4">
              HiMaterial 5 was a huge update that bridged the gap between Google's Material Design v3, and the HiOSMobile app design.
              With this new HiMaterial 5 design, it came with the new top navigation back buttons, and the left-aligned titles.
              This update also brought the new high-quality native buttons, and departs from the png navigation buttons at the bottom and top.
              We also changed some of our design elements recently to better match the Material 3 guidelines, and we made the CSS design files more streamlined with variables defining colours rather than defining them over and over again for every element. 
              Around the time of creating this iteration of HiMaterial, we also created native Settings, Help Center, and feedback pages.
              We went through a few different fonts with this design, such as Cantarell and Prompt, but we settled on Outfit since it fitted the rest of the The Highland Cafe™️ Enterprises' design philosophy at the time.
            </p>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 mb-2">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-1.png" alt="v5" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-2.png" alt="v5" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-3.png" alt="v5" />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 mb-5">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-4.png" alt="v5" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-5.png" alt="v5" />
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5-6.png" alt="v5" />
              </div>
            </div>
            
            <h3 className="mt-4">HiMaterial 5.1</h3>
            <p className="mb-4">
              HiMaterial 5.1 was more of a minor update based on HiMaterial 5, with minor but welcome improvements and tweaks to the overall design language.
              With this design update, we have made tweaks such as changing the new Dashboard screen back to the original Homescreen, changing the button designs, applying custom colours to specific brand pages such as weB&B (formerly WorstEastern) where we changed the theme to green to match the brand's colour scheme, streamlined the HiMaterial CSS files, making all the corners more rounded, and making the design more accessible.
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-5">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-1.png" alt="v5.1" />
                <p className="text-center mt-2">Welcome/Home page</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-2.png" alt="v5.1" />
                <p className="text-center mt-2">Restaurant page with overhauled buttons</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-3.png" alt="v5.1" />
                <p className="text-center mt-2">Hotel page with new colour scheme</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-4.png" alt="v5.1" />
                <p className="text-center mt-2">Room Key with more rounded corners</p>
              </div>
            </div>
            
            <h3 className="mt-4">HiMaterial 5.2</h3>
            <p className="mb-4">
              HiMaterial 5.2 was another minor, but meaningful design language update.
              We decided to change the bottom navigation bar to be docked to the bottom, but rounded at each corner, to give a more visually pleasing feeling.
              We also did this because the system navigation bar was black, which didn't look very good with the white floating nav bar in light mode.
              <br /><br />
              We also changed the font family of the app and HiOSWebCore to SUSE from Outfit, to make it in line with all of The Highland Cafe™️ Enterprises' other projects.
              <br /><br />
              We have also updated some design elements such as the bottom 'More' flyout in HiOSMobile Lite to match its Android app counterpart.
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-1.png" alt="v5.2" />
                <p className="text-center mt-2">Welcome/Home page in HiMaterial v5.2</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-2.png" alt="v5.2" />
                <p className="text-center mt-2">Updated Restaurant page in HiMaterial v5.2</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-3.png" alt="v5.2" />
                <p className="text-center mt-2">Updated Hotel page in HiMaterial v5.2</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-4.png" alt="v5.2" />
                <p className="text-center mt-2">Updated Room Key in HiMaterial v5.2</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-5">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-5.png" alt="v5.2" />
                <p className="text-center mt-2">Modernised Settings page</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-6.png" alt="v5.2" />
                <p className="text-center mt-2">Modernised Help Center</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-7.png" alt="v5.2" />
                <p className="text-center mt-2">HiOSMobile Lite - Updated 'More' menu design</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-8.png" alt="v5.2" />
                <p className="text-center mt-2">HiOSMobile Lite - Updated Settings page design</p>
              </div>
            </div>
            
            <h3 className="mt-4">HiMaterial 6</h3>
            <p className="mb-4">
              HiMaterial 6 was a massive overhaul of HiOSMobile's design language; HiMaterial 6 was designed with inspiration taken from Google's leaked upcoming Material 3 Expressive design, and HiMaterial 2.<br />
              HiMaterial 6 had all of the refinements made in all of version 5's updates, but with the added design changes of 6.<br /><br />
              This update re-introduced the concept to HiOSCore of a background image with blurred cards, which were last present in HiMaterial 2. There are a list of pre-defined wallpapers, but users can upload their own.<br /><br />
              The font was also changed back to Outfit, and every component was converted to Bootstrap (from v5.3).
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/1.png" alt="v6" />
                <p className="text-center mt-2">Welcome/Home page in HiMaterial v6</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/2.png" alt="v6" />
                <p className="text-center mt-2">A top-level page, HiMaterial v6</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/3.png" alt="v6" />
                <p className="text-center mt-2">A sub-page, HiMaterial v6</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/4.png" alt="v6" />
                <p className="text-center mt-2">Updated Hotel page, HiMaterial v6</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/5.png" alt="v6" />
                <p className="text-center mt-2">New appearance settings for changing background</p>
              </div>
              <div className="col">
                <img className="img-fluid w-100 mb-2 rounded-4" src="/assets/pics/hiosmobile-site/himaterial/himaterial6/6.png" alt="v6" />
                <p className="text-center mt-2">Pre-defined background options</p>
              </div>
            </div>
            <div className="d-grid gap-2 mt-4">
              <a className="btn btn-card px-4 py-2 rounded-pill shadow-sm" href="https://github.com/thehighlandcafe/hioswebcore/tree/main/assets/css" target="_blank" rel="noopener noreferrer">HiMaterial Source Code</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiOSMobileChangelogArchive() {
  return (
    <main style={{ padding: '80px 20px' }}>
      <section className="container mt-5 text-center">
        <h1 className="display-4 text-white fw-bold mb-4">Changelog Archive</h1>
        <p className="text-on-surface-variant mb-5">Historical releases catalog of the HiOSMobile software suite.</p>
        
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-4 border border-secondary text-start">
              <h2 className="h4 text-white mb-4">Jump to Section</h2>
              <div className="list-group list-group-flush">
                <a href="#version2" className="list-group-item bg-transparent text-primary-custom border-secondary p-3">Version 2.0+ (Newest - Oldest)</a>
                <a href="#version1" className="list-group-item bg-transparent text-primary-custom border-secondary p-3">Version 1.0 - 1.4.5 (Newest - Oldest)</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-start" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 id="version2" className="text-white border-bottom border-secondary pb-2 mb-4">Version 2.0+</h2>
          <p className="text-on-surface-variant">The changelog archive has been migrated. Please check release commits on our GitHub page for version updates!</p>
        </div>
      </section>
    </main>
  );
}
