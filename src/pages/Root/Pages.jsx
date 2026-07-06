import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 hero-content-glass">
          <h1 className="display-3 fw-bold animate-fade-in delay-200">
            The Highland Cafe™
            <br />
            <span>Enterprises</span>
          </h1>
          <p className="lead mt-4 animate-fade-in delay-500">
            Quality Food, At Its Best.
          </p>
        </div>
      </section>

      <section className="py-0 container text-start">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold">
            The Highland Cafe™ is a wonderful organisation based in Birmingham,
            UK.
          </h3>
          <h3 className="display-6">
            We pride ourselves in making good quality experience!
          </h3>
        </div>
        <div className="translucentBox full animate-fade-in">
          <h3 className="fw-light">
            We are the parent company of a variety of different brands, from
            hotel brands to supermarket brands!
          </h3>

          <div>
            <img
              className="img-fluid rounded-4 shadow-lg"
              src="/assets/pics/home/brand-portfolio.png"
              alt="Brand Portfolio"
            />
            <p className="mt-3 small text-center fst-italic">
              The Highland Cafe™ Enterprises' portfolio of brands, February 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div
            className="translucentBox full"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <div>
              <h2 className="display-6">Positive brand reviews</h2>
            </div>

            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
              <div className="col">
                <div className="card p-4 h-100">
                  <div className="text-warning mb-3">
                    ★ <span className="text-outline">★★★★</span>
                  </div>
                  <p className="fst-italic">
                    "A No Internet popup keeps appearing, preventing me from
                    actually using the app."
                  </p>
                  <p className="fw-bold mt-auto mb-0">HiOS for Android</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-4 h-100">
                  <div className="text-warning mb-3">
                    ★ <span className="text-outline">★★★★</span>
                  </div>
                  <p className="fst-italic">
                    "The room was disgusting, Days Inn would be better than this
                    dump."
                  </p>
                  <p className="fw-bold mt-auto mb-0">WorstEastern</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-4 h-100">
                  <div className="text-warning mb-3">
                    ★ <span className="text-outline">★★★★</span>
                  </div>
                  <p className="fst-italic">
                    "I bought a seemingly fresh pack of fruit one day, and the
                    next day it was rotting and mouldy!"
                  </p>
                  <p className="fw-bold mt-auto mb-0">FoodHall</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-4 h-100">
                  <div className="text-warning mb-3">
                    ★ <span className="text-outline">★★★★</span>
                  </div>
                  <p className="fst-italic">
                    "Simply abysmal, and horrendously overpriced."
                  </p>
                  <p className="fw-bold mt-auto mb-0">The Highland Cafe(tm)</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-4 h-100">
                  <div className="text-warning mb-3">
                    ★ <span className="text-outline">★★★★</span>
                  </div>
                  <p className="fst-italic">
                    "The coffee was poor and tasteless, and the cake I had was
                    last week's!"
                  </p>
                  <p className="fw-bold mt-auto mb-0">CafeFiesta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container">
          <div className="translucentBox joinTop">
            <div>
              <h2 className="display-6">Our brands</h2>
              <p className="text-on-surface-variant fs-5">
                We have lots of brands that are part of our company, so for more
                information on them, look below.
              </p>
            </div>
          </div>

          <div className="translucentBox joinMiddle">
            <h3 className="border-secondary pb-2 mb-4">Food & Shopping</h3>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hicafe.png"
                      className="card-img-top"
                      alt="HiCafe"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">The Highland Cafe™</h4>
                    <p>
                      Our main restaurant brand, the food brand you know and
                      love!
                    </p>
                    <Link to="/hicafe" className="btn btn-card">
                      HiCafe™
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/hyped/hyped.png"
                      className="card-img-top"
                      alt="HYPED"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HYPED</h4>
                    <p>Elevated energy cafe, nightclub, and restaurant.</p>
                    <Link to="/hyped" className="btn btn-card">
                      HYPED
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/cafefiesta.png"
                      className="card-img-top"
                      alt="CafeFiesta"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">CafeFiesta™</h4>
                    <p>This is our coffee-focused brand!</p>
                    <Link to="/cafefiesta" className="btn btn-card">
                      CafeFiesta™
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/foodhall.png"
                      className="card-img-top"
                      alt="FoodHall"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">FoodHall™</h4>
                    <p>
                      Our supermarkets. Massive in British, Massive in Quality.
                    </p>
                    <a
                      href="https://sites.google.com/view/hifoodhall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      FoodHall™
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/rewards.png"
                      className="card-img-top"
                      alt="HiCard"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HiRewards</h4>
                    <p>This is our amazing rewards programme!</p>
                    <Link
                      to="https://sites.google.com/view/hirewards"
                      className="btn btn-card"
                    >
                      HiRewards
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hicola.png"
                      className="card-img-top"
                      alt="Highland Cola"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Highland Cola™</h4>
                    <p>This is our company that makes sodas and more!</p>
                    <a
                      href="https://sites.google.com/view/highlandcola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      Visit Highland Cola™
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="translucentBox joinMiddle">
            <h3 className="border-secondary pb-2 mb-4">
              Hotels & Accommodation
            </h3>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/worsteastern.png"
                      className="card-img-top"
                      alt="weB&B"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">weB&B</h4>
                    <p>
                      This is the best hotel experience from The Highland Cafe™!
                    </p>
                    <Link to="/worsteastern" className="btn btn-card">
                      Visit weB&B
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="translucentBox joinMiddle">
            <h3 className="border-secondary pb-2 mb-4">Technology</h3>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hiosmobile.png"
                      className="card-img-top"
                      alt="Harmony"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HiCafe app</h4>
                    <p>Download the HiCafe app from here!</p>
                    <Link to="/hiosmobile" className="btn btn-card">
                      HiCafe App
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/nuggetdev/nuggetdev.png"
                      className="card-img-top"
                      alt="nuggetdev"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">nuggetdev</h4>
                    <p>The brains behind our tech experiences.</p>
                    <Link to="/nuggetdev" className="btn btn-card">
                      nuggetdev
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hioswebcore.png"
                      className="card-img-top"
                      alt="HarmonyCore"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HiOSCore (Discontinued)</h4>
                    <p>
                      This is the software that formerly powered all our app
                      experiences!
                    </p>
                    <a
                      href="https://hiosbythc.home.blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      HiOSCore
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hitech.png"
                      className="card-img-top"
                      alt="HiTech"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HiTech</h4>
                    <p>
                      This is our technology brand, the best ever tech to
                      improve your life!
                    </p>
                    <Link to="/hitech" className="btn btn-card">
                      Visit HiTech
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="translucentBox joinBottom">
            <h3 className="border-secondary pb-2 mb-4">Politics</h3>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="translucentAboutBox h-70">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/hiparty.png"
                      className="card-img-top"
                      alt="HiParty"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">HiParty™</h4>
                    <p>
                      Our brilliant political party. Your Priorities, Our
                      Mission.
                    </p>
                    <a
                      href="https://sites.google.com/view/thehighlandparty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      Visit The Highland Party™
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div
            className="translucentBox full"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <div>
              <h2 className="display-6">Our partners</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-6">
                <div className="translucentAboutBox h-100">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/de-ad.png"
                      className="card-img-top"
                      alt="De-Advertisement"
                    />
                  </div>
                  <div className="card-body text-start">
                    <h3 className="h5">De-Advertisement Co.</h3>
                    <p>
                      The people which run our astonishingly good customer
                      support services!
                    </p>
                    <a
                      href="https://sites.google.com/view/de-ad-rainbow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      Their Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className="translucentAboutBox h-100">
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/brands/swanora.png"
                      className="card-img-top"
                      alt="Swanora"
                    />
                  </div>
                  <div className="card-body text-start">
                    <h3 className="h5">Swanora Fashion</h3>
                    <p>
                      Be U, Be Different. A forward-thinking fashion company.
                    </p>
                    <a
                      href="https://sites.google.com/view/swanora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-card"
                    >
                      Their Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container">
          <div className="careers-box d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start">
            <div>
              <h2 className="display-5">Join Our Team</h2>
              <p className="mt-3 fs-5" style={{ opacity: 0.8 }}>
                Wanting to join our wonderful team? We're always looking for new
                talent.
              </p>
              <a
                href="https://sites.google.com/view/join-thehighlandcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-large-cta"
              >
                Careers @ HiEnterprises™
              </a>
            </div>
            <div className="mt-5 mt-lg-0 ms-lg-5">
              <img
                src="/assets/pics/home/careers.png"
                alt="Careers"
                className="img-fluid"
                style={{ maxWidth: "300px", borderRadius: "35px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function Blog() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://thehighlandcafe.github.io/hioswebcore/mobile-sites/hienterprises/pics/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <h1 className="display-1 fw-bold animate-fade-in">Our Blog</h1>
        </div>
      </section>

      <section className="py-5 container">
        <div className="text-center mb-5">
          <h2>Welcome to our new blog feed!</h2>
          <p className="text-on-surface-variant fs-5">
            Take a look below to see updates, statements, and more from our
            fantastic company!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="ratio ratio-1x1 border border-2 border-secondary rounded-4 shadow-lg"
              style={{ minHeight: "80vh" }}
            >
              <iframe
                src="https://hienterprises.blogspot.com/search/label/Company%20Update"
                title="Blog Feed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function Brands() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://thehighlandcafe.github.io/hioswebcore/mobile-sites/hienterprises/pics/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 hero-content-glass">
          <h1 className="display-1 fw-bold animate-fade-in">Our Brands</h1>
        </div>
      </section>

      <section className="py-0 container">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold">
            At The Highland Cafe™, we have a lot of brands under our company.
          </h3>
          <h3 className="display-6">
            Take a look below to see our brands and the links to their websites.
          </h3>
        </div>

        <div className="translucentBox joinTop">
          <h3 className="pb-2 mb-4">Food & Shopping</h3>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/hicafe.png"
                    className="card-img-top"
                    alt="HiCafe"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">The Highland Cafe™</h4>
                  <p>
                    Our main restaurant brand, the food brand you know and love!
                  </p>
                  <Link to="/hicafe" className="btn btn-card">
                    Visit HiCafe™
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/hyped/hyped.png"
                    className="card-img-top"
                    alt="HYPED"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HYPED</h4>
                  <p>Elevated energy cafe, nightclub, and restaurant.</p>
                  <Link to="/hyped" className="btn btn-card">
                    Visit HYPED
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/cafefiesta.png"
                    className="card-img-top"
                    alt="CafeFiesta"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">CafeFiesta™</h4>
                  <p>This is our coffee-focused brand!</p>
                  <Link to="/cafefiesta" className="btn btn-card">
                    Visit CafeFiesta™
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/foodhall.png"
                    className="card-img-top"
                    alt="FoodHall"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">FoodHall™</h4>
                  <p>
                    Our supermarkets. Massive in British, Massive in Quality.
                  </p>
                  <a
                    href="https://sites.google.com/view/hifoodhall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card"
                  >
                    Visit FoodHall™
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/rewards.png"
                    className="card-img-top"
                    alt="HiCard"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HiCard</h4>
                  <p>This is our amazing rewards programme and card!</p>
                  <Link to="/hicard" className="btn btn-card">
                    Visit HiCard
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/hicola.png"
                    className="card-img-top"
                    alt="Highland Cola"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Highland Cola™</h4>
                  <p>This is our company that makes sodas and more!</p>
                  <a
                    href="https://sites.google.com/view/highlandcola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card"
                  >
                    Visit Highland Cola™
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="translucentBox joinMiddle">
          <h3 className="pb-2 mb-4">Hotels & Accommodation</h3>
          <div className="row g-4 mb-5">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/worsteastern.png"
                    className="card-img-top"
                    alt="weB&B"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">weB&B</h4>
                  <p>
                    This is the best hotel experience from The Highland Cafe™!
                  </p>
                  <Link to="/worsteastern" className="btn btn-card">
                    Visit weB&B
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="translucentBox joinMiddle">
          <h3 className="pb-2 mb-4">Technology</h3>
          <div className="row g-4 mb-5">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/hiosmobile-site/hicafe2026-playstore.png"
                    className="card-img-top"
                    alt="Harmony"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HiCafe App</h4>
                  <p>Download the HiCafe app from here!</p>
                  <Link to="/hiosmobile" className="btn btn-card">
                    Visit HiCafe app
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/nuggetdev/nuggetdev.png"
                    className="card-img-top"
                    alt="nuggetdev"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">nuggetdev</h4>
                  <p>The brains behind our tech experiences.</p>
                  <Link to="/nuggetdev" className="btn btn-card">
                    Visit nuggetdev
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/hioswebcore.png"
                    className="card-img-top"
                    alt="HarmonyCore"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HiOSCore</h4>
                  <p>(Discontinued) The software that powered our apps!</p>
                  <a
                    href="https://hiosbythc.home.blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card"
                  >
                    Visit HiOSCore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/hitech.png"
                    className="card-img-top"
                    alt="HiTech"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HiTech</h4>
                  <p>
                    This is our technology brand, the best ever tech to improve
                    your life!
                  </p>
                  <Link to="/hitech" className="btn btn-card">
                    Visit HiTech
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="translucentBox joinBottom">
          <h3 className="pb-2 mb-4">Politics</h3>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="translucentAboutBox h-70">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/brands/hiparty.png"
                    className="card-img-top"
                    alt="HiParty"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">HiParty™</h4>
                  <p>
                    Our brilliant political party. Your Priorities, Our Mission.
                  </p>
                  <a
                    href="https://sites.google.com/view/thehighlandparty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-card"
                  >
                    Visit The Highland Party™
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
