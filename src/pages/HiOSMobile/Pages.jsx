import React from "react";
import { Link } from "react-router-dom";

export function HiOSMobileHome() {
  return (
    <main>
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://thehighlandcafe.github.io/hioswebcore/assets/css/backgrounds/backgroundimage.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">
            HiCafe
          </h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">
            by The Highland Cafe™
          </p>
        </div>
      </section>

      <section className="py-0 container text-start">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold text-primary-custom">
            Welcome to the greatest digital experience from The Highland Cafe™.
          </h3>
          <h3 className="display-6">Welcome to the HiCafe app.</h3>
        </div>
      </section>

      <section className="py-0 container">
        <div className="translucentBox full">
          <div className="text-center-5 animate-fade-in">
            <h2 className="fw-bold text-center">Downloads</h2>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-6">
              <div className="translucentAboutBox h-100 border-0 overflow-hidden hover-lift animate-fade-in">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/hiosmobile-site/hicafe2026-playstore.png"
                    className="card-img-top"
                    alt="Android full"
                  />
                </div>
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3">HiCafe for Android</h3>
                  <p className="card-text">
                    Our main app for Android! It is the best place to order food
                    and more at The Highland Cafe™ brands!
                  </p>
                  <Link
                    to="/hiosmobile/download"
                    className="btn btn-card px-4 py-2 rounded-pill shadow-sm"
                  >
                    Download HiCafe
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="translucentAboutBox h-100 border-0 overflow-hidden hover-lift animate-fade-in delay-100">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/hiosmobile-site/home/lite.png"
                    className="card-img-top"
                    alt="Web lite"
                  />
                </div>
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3">HiCafe for Web</h3>
                  <p className="card-text">
                    Do you have an iPhone or a Windows Phone? Try HiCafe for Web
                    that runs entirely in your browser!
                  </p>
                  <Link
                    to="/hiosmobile/lite"
                    className="btn btn-card px-4 py-2 rounded-pill shadow-sm"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 container pb-5 mb-5">
        <div className="translucentBox joinTop text-center animate-fade-in">
          <h2 className="fw-bold mb-3">Our apps are open source.</h2>
          <p className="fs-5 mx-auto">
            Until recently, only HiOSWebCore has been open source and available
            to look at on GitHub. Since late August 2023 we have made the extra
            effort to publish all our source code on GitHub.
          </p>
        </div>

        <div className="row justify-content-center animate-fade-in delay-100">
          <div className="col-lg-12">
            <div className="joinBottom translucentBox overflow-hidden">
              <div className="list-group list-group-flush">
                <a
                  href="https://github.com/hiosmobile/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "35px 35px 4px 4px",
                    border: "0.5px solid var(--outline)",
                    marginBottom: "3px",
                  }}
                >
                  <span className="fw-semibold fs-5">The HiCafe app</span>
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
                </a>
                <a
                  href="https://github.com/aarjay123/harmony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "4px",
                    border: "0.5px solid var(--outline)",
                    marginBottom: "3px",
                  }}
                >
                  <span className="fw-semibold fs-5">
                    HiOSMobile for Android
                  </span>
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
                </a>
                <a
                  href="https://github.com/aarjay123/hiosdesktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "4px",
                    border: "0.5px solid var(--outline)",
                    marginBottom: "3px",
                  }}
                >
                  <span className="fw-semibold fs-5">
                    HiOSDesktop (development ceased)
                  </span>
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
                </a>
                <a
                  href="https://github.com/aarjay123/hioswebcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "4px",
                    border: "0.5px solid var(--outline)",
                    marginBottom: "3px",
                  }}
                >
                  <span className="fw-semibold fs-5">HiOSWebCore</span>
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
                </a>
                <a
                  href="https://github.com/aarjay123/hiosmobileweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4"
                  style={{
                    borderRadius: "4px 4px 35px 35px",
                    border: "0.5px solid var(--outline)",
                  }}
                >
                  <span className="fw-semibold fs-5">HiOSMobile Lite</span>
                  <span className="material-symbols-rounded">
                    arrow_forward_ios
                  </span>
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
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://thehighlandcafe.github.io/hioswebcore/assets/css/backgrounds/backgroundimage.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">
            Download HiCafe
          </h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">
            for Android
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="translucentBox joinTop">
              <div className="d-flex align-items-start gap-4 mb-5">
                <img
                  src="/assets/pics/hiosmobile-site/hicafe2026-playstore.png"
                  alt="Harmony Icon"
                  className="rounded-4 shadow-sm"
                  width="120"
                  height="120"
                />
                <div>
                  <h2 className="display-5 fw-bold mb-1">HiCafe</h2>
                  <p className="fs-5 mb-2">The Highland Cafe™</p>
                </div>
              </div>

              <div className="d-grid gap-3 mb-5">
                <a
                  href="https://github.com/hiosmobile/app/releases/latest/"
                  className="btn btn-card btn-lg rounded-pill py-3 fw-bold shadow-lg"
                >
                  Download APK
                </a>
                <p className="text-center small">
                  Compatible with Android 7.0+
                </p>
              </div>
            </div>

            <div className="translucentBox joinMiddle">
              <h2 className="h4 fw-bold mb-3">About this app</h2>
              <p className="lh-lg">
                The HiCafe app is the main app by The Highland Cafe™ Enterprises
                for doing everything related to our brands, ranging from
                ordering food and looking at menus at The Highland Cafe™️ to
                booking a room or using the digital room key at weB&B!
              </p>
            </div>

            <div className="translucentBox joinMiddle">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 fw-bold mb-0">What's New?</h2>
                <a
                  href="https://github.com/hiosmobile/app/commits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small fw-bold"
                >
                  Version History
                </a>
              </div>
              <div className="translucentAboutBox">
                <p className="p-4 mb-0">
                  Check out the latest updates and improvements on our GitHub
                  repository. We are constantly working to improve the HiCafe
                  app.
                </p>
              </div>
            </div>

            <div className="accordion border-0" id="installAccordion">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    class="accordion-button collapsed fw-bold translucentBox joinMiddle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    style={{
                      backgroundColor: "var(--tertiary-container)",
                      color: "var(--on-tertiary-container)",
                    }}
                  >
                    How to Install (Sideload)
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#installAccordion"
                >
                  <div
                    className="accordion-body translucentBox joinMiddle"
                    style={{
                      backgroundColor: "var(--secondary-container)",
                      color: "var(--on-secondary-container)",
                      marginTop: "4px",
                    }}
                  >
                    <ol className="ps-3 mb-0">
                      <li className="mb-2">
                        Download the <strong>.apk</strong> file from the latest
                        GitHub release page using the button above.
                      </li>
                      <li className="mb-2">
                        Open the downloaded file from your notifications or File
                        Manager.
                      </li>
                      <li className="mb-2">
                        If prompted, allow installation from "Unknown Sources"
                        in your settings.
                      </li>
                      <li className="mb-0">
                        Tap <strong>Install</strong> and enjoy!
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="translucentBox joinBottom"></div>

            <div
              className="translucentBox full mt-3"
              style={{ backgroundColor: "var(--secondary-container)" }}
            >
              <h2 className="h4 fw-bold text-on-surface mb-3">App Info</h2>
              <div className="row g-4">
                <div className="col-6">
                  <p className="small mb-1">Provider</p>
                  <p className="fw-medium">The Highland Cafe™</p>
                </div>
                <div className="col-6">
                  <p className="small mb-1">Compatibility</p>
                  <p className="fw-medium">Android 7.0+</p>
                </div>
                <div className="col-6">
                  <p className="small mb-1">Category</p>
                  <p className="fw-medium">Lifestyle</p>
                </div>
                <div className="col-6">
                  <p className="small mb-1">Language</p>
                  <p className="fw-medium">English</p>
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
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://thehighlandcafe.github.io/hioswebcore/assets/css/backgrounds/backgroundimage.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">
            HiCafe for Web
          </h1>
          <p className="h3 fw-normal text-on-primary-container mt-3 animate-fade-in delay-200">
            for any modern internet-capable device
          </p>
        </div>
      </section>

      <section className="container">
        <img
          className="img-fluid w-100 rounded-4"
          src="/assets/pics/hiosmobile-site/lite/banner.png"
          alt="Lite banner"
        />
      </section>
      <section className="container mt-5 text-center mb-5">
        <div className="translucentBox full">
          <h2 className="display-6 mb-3" style={{ fontWeight: 600 }}>
            Are you an iPhone user or a Windows Phone user?
          </h2>
          <h2 className="display-6">You can use a web version of our app!</h2>
          <div className="translucentAboutBox card-body p-4">
            <h3 className="lead mb-2">
              Try HiCafe for Web by The Highland Cafe™
            </h3>
            <div className="d-grid gap-2 col-md-6 mx-auto">
              <a
                className="btn btn-card px-4 py-2 rounded-pill shadow-sm"
                href="https://hiosmobile.github.io/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                HiCafe for Web
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiOSMobileHiMaterial() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/assets/pics/hiosmobile-site/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 fw-bold text-white animate-fade-in">
            HiMaterial
          </h1>
        </div>
      </section>

      <section className="py-0 container text-start">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold text-primary-custom">
            Welcome to the future of UX.
          </h3>
          <h3 className="display-6">Welcome to HiMaterial.</h3>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="translucentBox full text-center">
              <h2 className="fw-bold">What is HiMaterial?</h2>
              <p>
                HiMaterial is the core design philosophy for every app by The
                Highland Cafe™️ Enterprises. Inspired loosely by Google's
                Material Design v3, we strive to create and communicate a
                pleasant and visually appealing experience to all our customers
                when they use our apps and software experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="translucentBox joinTop">
              <h2 className="display-4 mb-0">HiMaterial Versions</h2>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 1</h2>
              <p className="mb-4">
                HiMaterial 1 was released in December 2021 and was the first
                version of our new HiMaterial design language that replaced
                HiOSUX, which was used on the first version of HiOSDesktop.
              </p>
              <div className="translucentAboutBox text-center mb-5">
                <img
                  className="img-fluid rounded-4"
                  style={{ maxWidth: "18%" }}
                  src="/assets/pics/hiosmobile-site/himaterial/himaterial1.png"
                  alt="v1"
                />
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 2</h2>
              <p className="mb-4">
                HiMaterial 2 was the second iteration of our main design
                language; HiMaterial 2 debuted on HiOSMobile version 1.2, and
                the new HiOSUnified software.
              </p>
              <div className="translucentAboutBox d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
                <img
                  className="img-fluid rounded-4"
                  style={{ maxWidth: "18%" }}
                  src="/assets/pics/hiosmobile-site/himaterial/himaterial2.png"
                  alt="v2"
                />

                <img
                  className="img-fluid rounded-4"
                  style={{ maxWidth: "70%" }}
                  src="/assets/pics/hiosmobile-site/himaterial/hiosunified.png"
                  alt="v2 unified"
                />
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 3</h2>
              <p className="mb-4">
                HiMaterial 3 was a game changing update to the design language
                of HiOSMobile. This included the debut of the HiOSMobile dark
                theme, along with the first opaque card-focused design, that
                made the app look properly professional for the first time.
                <br />
                <br />
                <b>
                  Wanting to test out HiMaterial 3? Try the legacy version of
                  HiOSMobileWeb!
                </b>
                <br />
                <a
                  href="https://aarjay123.github.io/hiosmobileweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-custom"
                >
                  HiOSMobileWeb with HiMaterial 3
                </a>
              </p>
              <div className="translucentAboutBox d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
                <img
                  src="/assets/pics/hiosmobile-site/himaterial/himaterial3.1.png"
                  className="rounded-4"
                  style={{
                    height: "700px",
                    width: "auto",
                    maxWidth: "100%",
                  }}
                />

                <img
                  src="/assets/pics/hiosmobile-site/himaterial/himaterial3.2.png"
                  className="rounded-4"
                  style={{
                    height: "700px",
                    width: "auto",
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 4</h2>
              <p className="mb-4">
                HiMaterial 4 had less major design updates, and was a very
                welcome refinement based on user feedback on HiMaterial 3. This
                update included a fully light light-mode, and a fully dark
                dark-mode.
              </p>
              <div className="translucentAboutBox row mb-2">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial4-1.png"
                    alt="v4"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial4-2.png"
                    alt="v4"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial4-3.png"
                    alt="v4"
                  />
                </div>
              </div>
              <div className="translucentAboutBox">
                <img
                  className="img-fluid w-100 rounded-4"
                  src="/assets/pics/hiosmobile-site/himaterial/hiosunified2.png"
                  alt="unified 2"
                />
              </div>
              <p className="text-center mt-2">HiOSUnified2</p>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 5</h2>
              <p className="mb-4">
                HiMaterial 5 was a huge update that bridged the gap between
                Google's Material Design v3, and the HiOSMobile app design. With
                this new HiMaterial 5 design, it came with the new top
                navigation back buttons, and the left-aligned titles. This
                update also brought the new high-quality native buttons, and
                departs from the png navigation buttons at the bottom and top.
                We also changed some of our design elements recently to better
                match the Material 3 guidelines, and we made the CSS design
                files more streamlined with variables defining colours rather
                than defining them over and over again for every element. Around
                the time of creating this iteration of HiMaterial, we also
                created native Settings, Help Center, and feedback pages. We
                went through a few different fonts with this design, such as
                Cantarell and Prompt, but we settled on Outfit since it fitted
                the rest of the The Highland Cafe™️ Enterprises' design
                philosophy at the time.
              </p>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-3 row-cols-lg-3 mb-2">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-1.png"
                    alt="v5"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-2.png"
                    alt="v5"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-3.png"
                    alt="v5"
                  />
                </div>
              </div>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-3 row-cols-lg-3">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-4.png"
                    alt="v5"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-5.png"
                    alt="v5"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5-6.png"
                    alt="v5"
                  />
                </div>
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 5.1</h2>
              <p className="mb-4">
                HiMaterial 5.1 was more of a minor update based on HiMaterial 5,
                with minor but welcome improvements and tweaks to the overall
                design language. With this design update, we have made tweaks
                such as changing the new Dashboard screen back to the original
                Homescreen, changing the button designs, applying custom colours
                to specific brand pages such as weB&B (formerly WorstEastern)
                where we changed the theme to green to match the brand's colour
                scheme, streamlined the HiMaterial CSS files, making all the
                corners more rounded, and making the design more accessible.
              </p>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-1.png"
                    alt="v5.1"
                  />
                  <p className="text-center mt-2">Welcome/Home page</p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-2.png"
                    alt="v5.1"
                  />
                  <p className="text-center mt-2">
                    Restaurant page with overhauled buttons
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-3.png"
                    alt="v5.1"
                  />
                  <p className="text-center mt-2">
                    Hotel page with new colour scheme
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_1-4.png"
                    alt="v5.1"
                  />
                  <p className="text-center mt-2">
                    Room Key with more rounded corners
                  </p>
                </div>
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 5.2</h2>
              <p className="mb-4">
                HiMaterial 5.2 was another minor, but meaningful design language
                update. We decided to change the bottom navigation bar to be
                docked to the bottom, but rounded at each corner, to give a more
                visually pleasing feeling. We also did this because the system
                navigation bar was black, which didn't look very good with the
                white floating nav bar in light mode.
                <br />
                <br />
                We also changed the font family of the app and HiOSWebCore to
                SUSE from Outfit, to make it in line with all of The Highland
                Cafe™️ Enterprises' other projects.
                <br />
                <br />
                We have also updated some design elements such as the bottom
                'More' flyout in HiOSMobile Lite to match its Android app
                counterpart.
              </p>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-1.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    Welcome/Home page in HiMaterial v5.2
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-2.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    Updated Restaurant page in HiMaterial v5.2
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-3.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    Updated Hotel page in HiMaterial v5.2
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-4.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    Updated Room Key in HiMaterial v5.2
                  </p>
                </div>
              </div>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-5.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">Modernised Settings page</p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-6.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">Modernised Help Center</p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-7.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    HiOSMobile Lite - Updated 'More' menu design
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial5_2-8.png"
                    alt="v5.2"
                  />
                  <p className="text-center mt-2">
                    HiOSMobile Lite - Updated Settings page design
                  </p>
                </div>
              </div>
            </div>
            <div className="translucentBox joinMiddle">
              <h2>HiMaterial 6</h2>
              <p className="mb-4">
                HiMaterial 6 was a massive overhaul of HiOSMobile's design
                language; HiMaterial 6 was designed with inspiration taken from
                Google's leaked upcoming Material 3 Expressive design, and
                HiMaterial 2.
                <br />
                HiMaterial 6 had all of the refinements made in all of version
                5's updates, but with the added design changes of 6.
                <br />
                <br />
                This update re-introduced the concept to HiOSCore of a
                background image with blurred cards, which were last present in
                HiMaterial 2. There are a list of pre-defined wallpapers, but
                users can upload their own.
                <br />
                <br />
                The font was also changed back to Outfit, and every component
                was converted to Bootstrap (from v5.3).
              </p>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/1.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Welcome/Home page in HiMaterial v6
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/2.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    A top-level page, HiMaterial v6
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/3.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">A sub-page, HiMaterial v6</p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/4.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Updated Hotel page, HiMaterial v6
                  </p>
                </div>
              </div>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/5.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    New appearance settings for changing background
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial6/6.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Pre-defined background options
                  </p>
                </div>
              </div>
            </div>
            <div className="translucentBox joinBottom">
              <h2>HiMaterial 7</h2>
              <p className="mb-3">
                HiMaterial 7 was a huge refinement built on top of HiMaterial
                6's overhaul. We began to build this design update on the last
                version of the older HiOSWebCore html/css/js codebase, but we
                completed the new design after building the brand-new HiCafe app
                from scratch in ReactJS. This update brings back the card and
                element joins that were present in previous HiMaterial versions,
                and gives us the technical freedom to look backward to move
                forward.
              </p>

              <p className="mb-3">
                HiMaterial 7 is deeply nostalgic, heavily drawing on the DNA of
                the classic versions that came before it to build a unified
                design system that feels both incredibly modern and comforting
                to anyone who has followed the journey since the beginning.
              </p>

              <ul className="mb-4">
                <li className="mb-2">
                  <strong>The Return of the "Joins":</strong> Deliberately
                  rediscovering the structural security of{" "}
                  <strong>HiMaterial 3</strong> and{" "}
                  <strong>HiMaterial 5</strong>, elements now feel anchored
                  together. Deeply nested component joins seal modules like
                  weather and reward trackers inside single parent cards, while
                  individual actions are fused into smooth, continuous capsule
                  lists.
                </li>
                <li className="mb-2">
                  <strong>The Reimagined Legacy Backdrop:</strong> The scenic
                  Montenegrin Lake environment that users fell in love with in{" "}
                  <strong>HiMaterial 2</strong> makes a sweeping return. It now
                  acts as a beautifully integrated, layered canvas that
                  interacts natively with dark and light modes.
                </li>
                <li className="mb-2">
                  <strong>Matured Brand Colorways:</strong> The distinct green
                  theme for accommodations originally introduced in{" "}
                  <strong>HiMaterial 5.1</strong> is back. It is now elegantly
                  restrained, acting as a functional visual anchor inside the
                  headers of joined booking modules.
                </li>
                <li className="mb-2">
                  <strong>Layout Alignment & Controls:</strong> The prominent
                  left-aligned headings and native action buttons that defined
                  our bridge to Material Design 3 in{" "}
                  <strong>HiMaterial 5</strong> remain the unwavering
                  foundation. Meanwhile, the bottom-docked navigation from{" "}
                  <strong>HiMaterial 5.2</strong> has matured to effortlessly
                  transform into a top tab bar on wider screens.
                </li>
              </ul>

              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/1.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Welcome/Home page in HiMaterial v7
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/2.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    An expanded widget popup, HiMaterial v7
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/3.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Updated Restaurant page, HiMaterial v7
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/4.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Updated Hotel page, HiMaterial v7
                  </p>
                </div>
              </div>
              <div className="translucentAboutBox row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-4">
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/5.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">Brand new HiRewards page</p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/6.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Bottom sheet popup to access Settings and Help
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/7.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Re-developed Settings page with accounts center
                  </p>
                </div>
                <div className="col">
                  <img
                    className="img-fluid w-100 mb-2 rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/8.png"
                    alt="v6"
                  />
                  <p className="text-center mt-2">
                    Re-designed Appearance settings with more customisation
                    options
                  </p>
                </div>
              </div>
              <div className="translucentAboutBox row align-items-center">
                <div className="col-12 col-lg-4 text-center">
                  <img
                    className="img-fluid rounded-4"
                    style={{ maxHeight: "700px" }}
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/9.png"
                    alt="HiMaterial 7 Help Center"
                  />
                  <p className="text-center mt-2">
                    Updated Help Center, HiMaterial v7
                  </p>
                </div>

                <div className="col-12 col-lg-8 text-center">
                  <img
                    className="img-fluid rounded-4"
                    src="/assets/pics/hiosmobile-site/himaterial/himaterial7/10.png"
                    alt="HiMaterial 7 Appearance Settings"
                  />
                  <p className="text-center mt-2">
                    Re-designed navigation for wide-screen devices (like tablets
                    or desktops), replacing the previous side rail.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 mt-4">
              <a
                className="btn btn-card px-4 py-2 rounded-pill shadow-sm"
                href="https://github.com/thehighlandcafe/hioswebcore/tree/main/assets/css"
                target="_blank"
                rel="noopener noreferrer"
              >
                HiMaterial Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiOSMobileChangelogArchive() {
  return (
    <main style={{ padding: "80px 20px" }}>
      <section className="container mt-5 text-center">
        <h1 className="display-4 text-white fw-bold mb-4">Changelog Archive</h1>
        <p className="text-on-surface-variant mb-5">
          Historical releases catalog of the HiOSMobile software suite.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card p-4 border border-secondary text-start">
              <h2 className="h4 text-white mb-4">Jump to Section</h2>
              <div className="list-group list-group-flush">
                <a
                  href="#version2"
                  className="list-group-item bg-transparent text-primary-custom border-secondary p-3"
                >
                  Version 2.0+ (Newest - Oldest)
                </a>
                <a
                  href="#version1"
                  className="list-group-item bg-transparent text-primary-custom border-secondary p-3"
                >
                  Version 1.0 - 1.4.5 (Newest - Oldest)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-start">
          <h2
            id="version2"
            className="text-white border-bottom border-secondary pb-2 mb-4"
          >
            Version 2.0+
          </h2>
          <p className="text-on-surface-variant">
            The changelog archive has been migrated. Please check release
            commits on our GitHub page for version updates!
          </p>
        </div>
      </section>
    </main>
  );
}
