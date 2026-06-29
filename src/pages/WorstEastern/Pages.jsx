import React from "react";
import { Link } from "react-router-dom";

export function WorstEasternHome() {
  return (
    <main>
      <section className="hero-section" style={{ height: "100vh" }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/assets/pics/worsteastern/backdrop.jpg')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container z-1">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            weB&B
          </h1>
          <p className="lead animate-fade-in delay-200 text-light fs-4">
            by The Highland Cafe™
          </p>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Welcome to our hotel experience.</h2>
            <p className="lead text-on-surface-variant">
              Our hotels give the quality stay any average member of the general
              public and business man/woman communities who wants to stay with
              us.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg card">
              <iframe
                src="https://www.youtube.com/embed/7By-gcfB_iY?si=2x-ITvGkD1PDqIZm"
                title="Promotional Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 container">
        <hr className="border-secondary my-5 opacity-50" />
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
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
            <div className="card h-100 border-0 shadow-sm">
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
            <div className="card h-100 border-0 shadow-sm">
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
        <div className="container z-1">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            Rooms
          </h1>
        </div>
      </section>

      <section className="py-5 container">
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
              className="mb-5 animate-fade-in delay-200"
            >
              <h2 className="text-center mb-5 fw-bold text-on-surface">
                Types of Rooms Available
              </h2>
              <div className="row g-4">
                {/* Economy Type */}
                <div className="col-md-4" id="type-economy">
                  <div className="card h-100 text-center border-0 shadow-sm">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/economy.png"
                        className="card-img-top object-fit-cover"
                        alt="Economy Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4 text-on-surface">Economy</h3>
                      <p className="small text-on-surface-variant">
                        This is like a motel room, but with our twist! With lots
                        of extra cheeky perks like cleanliness, you're sure to
                        love it!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Standard Type */}
                <div className="col-md-4" id="type-standard">
                  <div className="card h-100 text-center border-0 shadow-sm">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/standard.png"
                        className="card-img-top object-fit-cover"
                        alt="Standard Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4 text-on-surface">Standard</h3>
                      <p className="small text-on-surface-variant">
                        This is the standard, classic weB&B experience! You'll
                        get the same wonderful rooms, for a great price too!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Premium Type */}
                <div className="col-md-4" id="type-premium">
                  <div className="card h-100 text-center border-0 shadow-sm">
                    <div className="card-img-wrapper">
                      <img
                        src="/assets/pics/worsteastern/rooms/premium.png"
                        className="card-img-top object-fit-cover"
                        alt="Premium Room"
                        style={{ height: "220px" }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="h4 text-on-surface">Premium</h3>
                      <p className="small text-on-surface-variant">
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
              className="mt-5 pt-5 animate-fade-in delay-200"
            >
              <h2 className="text-center mb-5 fw-bold text-on-surface">
                About Our Rooms
              </h2>

              {/* About Economy */}
              <div
                id="about-economy"
                className="mb-5 pb-4 border-bottom border-secondary opacity-75"
              >
                <h3 className="h3 fw-bold mb-4 text-on-surface">
                  Economy{" "}
                  <span className="fs-6 text-on-surface-variant fw-normal">
                    (formerly SnugMotels/SleepyNightz)
                  </span>
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
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
                    <div className="card h-100 border-0 shadow-sm">
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

              {/* About Standard */}
              <div
                id="about-standard"
                class="mb-5 pb-4 border-bottom border-secondary opacity-75"
              >
                <h3 className="h3 fw-bold mb-3 text-on-surface">Standard</h3>
                <h4 className="h5 text-on-surface-variant mb-3">
                  The rooms are as average as it gets.
                </h4>
                <p className="text-on-surface-variant mb-4 lead fs-6">
                  With plain white bed sheets, no decorations, and a carpet that
                  is the same as everywhere else, you are all set.
                </p>

                <div
                  className="card border-0 shadow-sm overflow-hidden mx-auto"
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
                    <h5 className="card-title text-on-surface fw-bold">
                      The bathrooms are cool
                    </h5>
                    <p className="card-text text-on-surface-variant">
                      The bathrooms are proper generic hotel bathrooms so you
                      can enjoy them. They are white clean and shiny just what
                      you would expect from a{" "}
                      <em className="fst-italic">professional</em> hotel.
                    </p>
                  </div>
                </div>
              </div>

              {/* About Premium */}
              <div id="about-premium" className="mb-5">
                <h3 className="h3 fw-bold mb-4 text-on-surface">
                  Premium{" "}
                  <span className="fs-6 text-on-surface-variant fw-normal">
                    (formerly HotelComfy)
                  </span>
                </h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/premium1.png"
                          className="card-img-top object-fit-cover"
                          alt="Premium Room Interior"
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h4 className="h5 mb-0 text-on-surface">Bedrooms</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-img-wrapper">
                        <img
                          src="/assets/pics/worsteastern/rooms/premium2.png"
                          className="card-img-top object-fit-cover"
                          alt="Premium Bathroom Interior"
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
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            How to Travel to weB&B
          </h1>
        </div>
      </section>

      <section className="py-5 container">
        <div className="row justify-content-center animate-fade-in delay-200">
          <div className="col-lg-10">
            <h2 className="fw-bold mb-4 text-on-surface">About weB&B</h2>
            <div className="fs-5 text-on-surface-variant">
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
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-lg-10">
            <hr className="border-secondary opacity-25 mb-5" />
            <img
              className="img-fluid rounded-4 shadow-lg w-100"
              src="/assets/pics/worsteastern/staying-with-us/cars.jpg"
              alt="Cars parked in front of a modern building"
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <hr className="border-secondary opacity-25 mb-5" />
            <h2 className="fw-bold mb-4 text-on-surface">Wanting to visit?</h2>
            <p className="fs-5 text-on-surface-variant mb-5">
              Visit us by searching weB&B on Google Maps and finding the
              location. Then start the directions by clicking the "start" button
              (see detailed diagrams please).
            </p>

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
        <div className="container z-1">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            How to Reserve a Room
          </h1>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-5">
              <h2 className="display-5 fw-bold mb-3 text-on-surface">
                To reserve a room, please download Harmony for your Android
                phone!
              </h2>
              <p className="fs-5 text-on-surface-variant">
                Click the button below to be redirected to the Harmony website!
              </p>
              <div className="mt-4">
                <Link to="/harmony" className="btn btn-nav-cta btn-lg px-5">
                  Download Harmony
                </Link>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="h2 fw-bold mb-3 text-on-surface">
                Otherwise, if you have an iPhone...
              </h3>
              <p className="fs-5 text-on-surface-variant">
                Please visit the link below to go to the website version of our
                app (Harmony for Web):
              </p>
              <div className="mt-4">
                <a
                  href="https://thehighlandcafe.github.io/harmony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg px-5 rounded-pill fw-bold"
                >
                  Harmony for Web
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <img
              className="img-fluid rounded-4 shadow-lg w-100"
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
        <div className="container z-1">
          <h1 className="display-1 animate-fade-in text-white fw-bold">
            weB&B App
          </h1>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-4 text-on-surface">
              To do everything that the old WorstEastern app could do, download
              the HiCafe app from the HiCafe app's website! 😀
            </h2>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-5">
              <Link to="/hiosmobile" className="btn btn-nav-cta btn-lg px-5">
                Download HiCafe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
