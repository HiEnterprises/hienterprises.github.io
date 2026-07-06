import React from "react";
import { Link } from "react-router-dom";

export function WorstEasternHome() {
  return (
    <main>
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/assets/pics/worsteastern/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1 hero-content-glass">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            weB&B
          </h1>
          <p className="lead animate-fade-in delay-200 fs-4">
            by The Highland Cafe™
          </p>
        </div>
      </section>

      <section className="py-0 container text-start">
        <div className="animate-fade-in">
          <h3 className="display-6 fw-bold">
            Welcome to our hotel experience.
          </h3>
          <h3 className="display-6">Welcome to weB&B.</h3>
        </div>
        <p className="lead">
          Our hotels give the quality stay any average member of the general
          public and business man/woman communities who wants to stay with us.
        </p>

        <div className="translucentBox joinTop justify-content-center mt-5">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg card">
            <iframe
              src="https://www.youtube.com/embed/7By-gcfB_iY?si=2x-ITvGkD1PDqIZm"
              title="Promotional Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="translucentBox joinBottom"
          style={{ backgroundColor: "var(--secondaryContainer)" }}
        >
          <div className="row g-4">
            <div className="col-md-4">
              <div className="translucentAboutBox h-100">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/worsteastern/home/1.jpg"
                    className="card-img-top object-fit-cover"
                    alt="Hotel room"
                    style={{ height: "224px" }}
                  />
                </div>
                <div className="card-body p-4">
                  <p className="text-on-surface-variant fs-5 mb-0">
                    Okay-ish rooms
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="translucentAboutBox h-100">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/worsteastern/home/2.jpg"
                    className="card-img-top object-fit-cover"
                    alt="Hotel bathroom"
                    style={{ height: "224px" }}
                  />
                </div>
                <div className="card-body p-4">
                  <p className="text-on-surface-variant fs-5 mb-0">
                    Average bathrooms
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="translucentAboutBox">
                <div className="card-img-wrapper">
                  <img
                    src="/assets/pics/worsteastern/home/3.jpg"
                    className="card-img-top object-fit-cover"
                    alt="Plated food"
                    style={{ height: "224px" }}
                  />
                </div>
                <div className="card-body p-4">
                  <p className="text-on-surface-variant fs-5 mb-0">
                    Fantastic food, by The Highland Cafe™
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="translucentBox full mt-5">
          <h2 className="display-6">Recommended attire</h2>
          <p className="card-text">
            We're recommending semi-formal attire. Since you're arriving
            directly from our car park, plan on bringing your party clothes and
            changing before we leave.
          </p>
        </div>
      </section>
    </main>
  );
}

export function WorstEasternRooms() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/assets/pics/worsteastern/rooms/hotelroom.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1 hero-content-glass">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            Rooms
          </h1>
        </div>
      </section>

      <section className="py-0 container">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold">Our rooms are lovely.</h3>
          <h3 className="display-6">Wow yourself below.</h3>
        </div>
        <div className="row">
          {/* Table of Contents (Sticky Sidebar) */}
          <div className="col-lg-3 mb-5">
            <div className="sticky-top" style={{ top: "100px", zIndex: 1 }}>
              <h2 className="h4 mb-3 text-on-surface">Table of Contents</h2>
              <ul class="list-unstyled">
                <li>
                  <a
                    href="#types-of-rooms-available"
                    className="text-decoration-none text-primary-custom fw-bold"
                  >
                    Types of rooms available
                  </a>
                  <ul className="list-unstyled ps-3 mt-1">
                    <li>
                      <a
                        href="#type-economy"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Economy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#type-standard"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Standard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#type-premium"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Premium
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mt-3">
                  <a
                    href="#about-our-rooms"
                    className="text-decoration-none text-primary-custom fw-bold"
                  >
                    About our rooms
                  </a>
                  <ul className="list-unstyled ps-3 mt-1">
                    <li>
                      <a
                        href="#about-economy"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Economy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-standard"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Standard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-premium"
                        className="text-decoration-none text-on-surface-variant small"
                      >
                        Premium
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-lg-9">
            {/* Section: Types of Rooms Available */}
            <div
              id="types-of-rooms-available"
              className="mb-5 animate-fade-in delay-200 translucentBox full"
            >
              <h2 className="display-6">Room types</h2>
              <div className="row g-4">
                {/* Economy Type */}
                <div className="col-md-4" id="type-economy">
                  <div className="translucentAboutBox">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/economy.png"
                        className="card-img-top object-fit-cover"
                        alt="Economy Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4">Economy</h3>
                      <p className="small">
                        This is like a motel room, but with our twist! With lots
                        of extra cheeky perks like cleanliness, you're sure to
                        love it!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Standard Type */}
                <div className="col-md-4" id="type-standard">
                  <div className="translucentAboutBox">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/standard.png"
                        className="card-img-top object-fit-cover"
                        alt="Standard Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4">Standard</h3>
                      <p className="small">
                        This is the standard, classic weB&B experience! You'll
                        get the same wonderful rooms, for a great price too!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Premium Type */}
                <div className="col-md-4" id="type-premium">
                  <div className="translucentAboutBox">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/premium.png"
                        className="card-img-top object-fit-cover"
                        alt="Premium Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4">Premium</h3>
                      <p className="small">
                        Luxury. At its peak. With massive suites, minifridges,
                        and WiFi included, you will get to stay with us in
                        style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: About Our Rooms */}
            <div
              id="about-our-rooms"
              className="mt-5 pt-5 animate-fade-in delay-200 translucentBox joinTop"
            >
              <h2 className="display-6">About our rooms</h2>

              {/* About Economy */}
              <div id="about-economy">
                <h3>
                  Economy{" "}
                  <span
                    className="fs-6 fw-normal"
                    style={{ color: "var(--onPrimaryContainer) !important" }}
                  >
                    (formerly SnugMotels/SleepyNightz)
                  </span>
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="translucentAboutBox">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/economy-room.png"
                          className="card-img-top object-fit-cover"
                          alt="Economy Room Interior"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="h5 mb-0 text-on-surface">Rooms</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="translucentAboutBox">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/economy-bathroom.png"
                          className="card-img-top object-fit-cover"
                          alt="Economy Bathroom Interior"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="h5 mb-0 text-on-surface">Bathrooms</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Standard */}
            <div className="translucentBox joinMiddle">
              <div id="about-standard">
                <h3>Standard</h3>
                <h4 className="h5 mb-3">
                  The rooms are as average as it gets.
                </h4>
                <p className="lead fs-6">
                  With plain white bed sheets, no decorations, and a carpet that
                  is the same as everywhere else, you are all set.
                </p>

                <div
                  className="translucentAboutBox overflow-hidden mx-auto"
                  style={{ maxWidth: "800px" }}
                >
                  <div className="card-img-wrapper">
                    <img
                      src="/assets/pics/worsteastern/rooms/standard-bathroom.jpg"
                      className="card-img-top object-fit-cover"
                      alt="Standard Bathroom Interior"
                      style={{ height: "400px" }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-bold">
                      The bathrooms are cool
                    </h5>
                    <p className="card-text">
                      The bathrooms are proper generic hotel bathrooms so you
                      can enjoy them. They are white clean and shiny just what
                      you would expect from a{" "}
                      <em className="fst-italic">professional</em> hotel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Premium */}
            <div className="translucentBox joinBottom">
              <div id="about-premium">
                <h3>
                  Premium{" "}
                  <span
                    className="fs-6 fw-normal"
                    style={{ color: "var(--onPrimaryContainer) !important" }}
                  >
                    (formerly HotelComfy)
                  </span>
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="translucentAboutBox">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/premium1.png"
                          className="card-img-top object-fit-cover"
                          alt="Premium Room Interior"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="h5 mb-0">Bedrooms</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="translucentAboutBox">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/premium2.png"
                          className="card-img-top object-fit-cover"
                          alt="Premium Bathroom Interior"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="h5 mb-0">Bathrooms</h4>
                      </div>
                    </div>
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

export function WorstEasternHowToGetThere() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/assets/pics/worsteastern/staying-with-us/car.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1">
          <h1 className="display-1 animate-fade-in fw-bold hero-content-glass">
            How to trave to weB&B
          </h1>
        </div>
      </section>

      <section className="py-0 container">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold">Room booked? Check.</h3>
          <h3 className="display-6">Transport? Easy.</h3>
        </div>

        <div className="animate-fade-in delay-200">
          <div className="translucentBox joinTop">
            <h2 className="display-6">About weB&B</h2>
            <div className="fs-5">
              <p>
                weB&B is <u>the</u> hotel brand by The Highland Cafe™. Whatever
                your budget, we've got a room that will most definitely suit{" "}
                <u>you</u>!
              </p>
              <p>
                We'll be partying down at the swanky weB&B hotel. We've reserved
                the Penthouse Ballroom from 6 p.m.
              </p>
              <p>
                When you arrive, please make sure you tell the receptionist you
                are staying here and they will direct you to your toom. They
                will show you to a lift that will take you directly to the room.
              </p>
            </div>
          </div>

          <div
            className="translucentBox joinBottom"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <img
              className="img-fluid rounded-4 shadow-lg w-100"
              src="/assets/pics/worsteastern/staying-with-us/cars.jpg"
              alt="Cars parked in front of a modern building"
            />
          </div>
        </div>

        <div className="justify-content-center mt-5">
          <div className="translucentBox joinTop">
            <h2 className="fw-bold mb-4 text-on-surface">Wanting to visit?</h2>
            <p className="fs-5 text-on-surface-variant mb-5">
              Visit us by searching weB&B on Google Maps and finding the
              location. Then start the directions by clicking the "start" button
              (see detailed diagrams please).
            </p>
          </div>
          <div
            className="translucentBox joinBottom"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <div className="row g-5 align-items-center text-center">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center">
                  <span className="display-4 fw-bold text-primary-custom mb-3">
                    1.
                  </span>
                  <img
                    className="img-fluid rounded-4 shadow-lg w-100"
                    src="/assets/pics/worsteastern/staying-with-us/1.png"
                    alt="Step one of directions"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block transition-transform hover-scale"
                >
                  <img
                    className="img-fluid"
                    style={{ width: "120px" }}
                    src="/assets/pics/worsteastern/staying-with-us/arrow.png"
                    alt="Arrow pointing to the next step"
                  />
                </a>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center">
                  <span className="display-4 fw-bold text-primary-custom mb-3">
                    2.
                  </span>
                  <img
                    className="img-fluid rounded-4 shadow-lg w-100"
                    src="/assets/pics/worsteastern/staying-with-us/2.png"
                    alt="Step two of directions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function WorstEasternHowToReserve() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/assets/pics/worsteastern/how-to-reserve-room/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1 hero-content-glass">
          <h1 className="display-1 animate-fade-in fw-bold">
            How to Reserve a Room
          </h1>
        </div>
      </section>

      <section className="py-0 container">
        <div className="animate-fade-in mb-5">
          <h3 className="display-6 fw-bold">Want to book a room?</h3>
          <h3 className="display-6">Simples. Download our app.</h3>
        </div>

        <div className="justify-content-center">
          <div className="translucentBox joinTop">
            <div>
              <h2 className="display-6">Download the HiCafe app</h2>
              <p className="fs-5">
                To reserve a room, please download the HiCafe app for your
                Android phone. Click the button below to be redirected to the
                HiCafe app's website!
              </p>
              <div className="mt-4">
                <Link to="/hiosmobile/download" className="btn-card">
                  Download the HiCafe app
                </Link>
              </div>
            </div>
          </div>

          <div
            className="translucentBox joinMiddle"
            style={{ backgroundColor: "var(--secondaryContainer)" }}
          >
            <div className="mb-5">
              <h3 className="display-6">Otherwise, if you have an iPhone...</h3>
              <p className="fs-5">
                Please visit the link below to go to the website version of our
                app (HiCafe app for Web):
              </p>
              <div className="mt-4">
                <a
                  href="https://hiosmobile.github.io/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card"
                  style={{ backgroundColor: "var(--secondary) !important" }}
                >
                  HiCafe app for web
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 container">
        <div className="row justify-content-center">
          <div className="">
            <img
              className="img-fluid rounded-4 shadow-lg w-100 joinBottom"
              src="/assets/pics/worsteastern/how-to-reserve-room/bed.jpg"
              alt="A well-made hotel bed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export function WorstEasternHiOSMobileApp() {
  return (
    <main>
      <section className="hero-section" style={{ height: "60vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/assets/pics/worsteastern/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1 hero-content-glass">
          <h1 className="display-1 animate-fade-in fw-bold">
            WorstEastern App
          </h1>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="">
            <h2 className="mb-4 text-on-surface">
              To do everything that the old WorstEastern app could do, download
              the HiCafe app from the HiCafe app's website! 😀
            </h2>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-5">
              <Link to="/hiosmobile" className="btn-card">
                Download HiCafe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
