import React from 'react';
import { Link } from 'react-router-dom';

export function HiCafeHome() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://thehighlandcafe.github.io/hioswebcore/mobile-sites/hienterprises/pics/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 font-caveat text-white animate-fade-in">The Highland Cafe™</h1>
          <p className="lead mt-2 animate-fade-in delay-200 text-light opacity-75">by The Highland Cafe™ Enterprises</p>
        </div>
      </section>

      <section className="py-5 container text-center">
        <div className="row justify-content-center animate-fade-in">
          <div className="col-lg-10">
            <h2 className="font-caveat display-4 text-title-yellow">Welcome to the greatest restaurant experience ever.</h2>
            <h2 className="font-caveat display-4 text-title-yellow mt-2">Welcome to The Highland Cafe™.</h2>
            <img className="img-fluid w-50 d-block mx-auto mt-4" src="/assets/pics/hicafe/logo.png" alt="The Highland Cafe Logo" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary-container bg-opacity-25 animate-fade-in">
        <div className="container">
          <h2 className="text-center fw-bold text-on-primary-container mb-2">Our Brilliant Restaurant Reviews</h2>
          <p className="text-center text-on-surface-variant mb-5">...as seen on Dougal Maps</p>
          
          <div className="row g-4 text-center">
            <div className="col-sm-6 col-lg">
              <div className="animate-fade-in">
                <p className="fs-4 text-warning">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant mt-2">'My chicken was raw, almost got salmonella, will not be visiting again'</p>
                <p className="fw-bold text-on-surface mt-2">- Dougal Maps Reviewer</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg">
              <div className="animate-fade-in delay-100">
                <p className="fs-4 text-warning">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant mt-2">'The staff were rude and they overcharged me'</p>
                <p className="fw-bold text-on-surface mt-2">- Dougal Maps Reviewer</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg">
              <div className="animate-fade-in delay-200">
                <p className="fs-4 text-warning">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant mt-2">'I didn't get served, so I just left'</p>
                <p className="fw-bold text-on-surface mt-2">- Dougal Maps Reviewer</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg">
              <div className="animate-fade-in delay-300">
                <p className="fs-4 text-warning">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant mt-2">'Simply awful'</p>
                <p className="fw-bold text-on-surface mt-2">- Dougal Maps Reviewer</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg">
              <div className="animate-fade-in delay-400">
                <p className="fs-4 text-warning">★<span className="text-outline">☆☆☆☆</span></p>
                <p className="fst-italic text-on-surface-variant mt-2">'One of the staff got hit in the head with a pan, will not be risking my life again'</p>
                <p className="fw-bold text-on-surface mt-2">- Dougal Maps Reviewer</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5 animate-fade-in">
            <Link to="/hicafe/reviews" className="btn btn-nav-cta px-4 py-2 rounded-pill shadow hover-scale">
              More Great Reviews!
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5 animate-fade-in">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-primary-container border-0 overflow-hidden text-center shadow hover-lift">
                <img src="/assets/pics/hicafe/home/hiosmobile.png" className="card-img-top object-fit-cover" alt="Mobile App" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h4 fw-bold text-primary">Download Harmony</h3>
                  <Link to="/harmony" className="btn btn-nav-cta w-100 mt-3 rounded-pill">Mobile App</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-primary-container border-0 overflow-hidden text-center shadow hover-lift">
                <img src="/assets/pics/hicafe/home/menu.png" className="card-img-top object-fit-cover" alt="Restaurant Menu" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h4 fw-bold text-primary">View Our Menus Online</h3>
                  <Link to="/hicafe/menu" className="btn btn-nav-cta w-100 mt-3 rounded-pill">Menus</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-primary-container border-0 overflow-hidden text-center shadow hover-lift">
                <img src="/assets/pics/hicafe/home/hienterprises.png" className="card-img-top object-fit-cover" alt="HiEnterprises Logo" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h3 className="h4 fw-bold text-primary">HiEnterprises™ Website</h3>
                  <Link to="/" className="btn btn-nav-cta w-100 mt-3 rounded-pill">HiEnterprises™</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiCafeReviews() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hicafe/logo.png')", filter: 'brightness(0.3)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 font-caveat text-white animate-fade-in">Reviews</h1>
        </div>
      </section>

      <section className="py-5 container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="fw-bold text-on-surface">Take a look below at some of our amazing reviews!</h2>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'My chicken was raw, almost got salmonella, will not be visiting again'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'i can asure you we kook chicken's to prefect temprature so It must be some thing you aet some were eles. NB'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-100 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'The staff are rude and they overcharged me'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'we had good mannerizmz so i dont know what yoy are taking about. BC'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-200 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'I didn't get served, so I just left'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'soz we like very buzy on dat dae so liek yeah. we dont like wantn peoples like like youse comin' so yeah. JB'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-300 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'Simply awful'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'You are looking in a mirror for definite. SH'</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'One of the staff got hit in the head with a pan, will not be risking my life again'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'YOU ARE A DUMB WE NOT EVER WANT TO SEE YOU EVER AGAIN IN OUR RESTRANT THANKS PR'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-100 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'I got screamed at by this guy called Patrick. I almost had a heart attack as I am 97. DO NOT COME HERE!'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'go back to you old fokes home you noob NB'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-200 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'My daughter got severe salmonella from the kids\' chamomile ice cream; the customer support was useless so don\'t expect compensation'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'we keep our ices in the frij so they are nice and cold so no samonela, no were near chicken. BC'</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card h-100 border-0 shadow-sm animate-fade-in delay-300 hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-3">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic small mb-2">'A full-on scam show they\'re running down in Birmingham'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'WE ARE LEGIT BUSNESS ASK ANYONE LIKE DE-ADVERTISEMENT COMPANIE RAINBOW OR NUGGETOS WE LEGIT ALRIGHT?!! PR'</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center animate-fade-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm hover-lift">
              <div className="card-header bg-primary-container text-white border-0 py-4 px-4">
                <div className="fs-5 text-warning mb-2">★<span className="text-outline opacity-50">☆☆☆☆</span></div>
                <p className="fst-italic mb-3 small lh-lg">'We came here after a long flight from Alicante and we arrived at around 23:00. We were carrying quite a few bags and when we came into the hotel reception we were greeted by a strong smell of cigarette smoke. I read a few other reviews saying that the fire alarm went off, so I\'m guessing it went off due to someone smoking in the reception area. We were also greeted by a small sign telling us that the reception had been permanently moved to the bar next door. How annoying! That meant we had to walk back out of the reception and go over to the bar next door in the cold and the dark. The room was nice and clean and they had put in an extra single bed for us which was nice. In the morning, we went over to the bar next door for continental breakfast and a cooked breakfast. It was nice, but the pancakes weren\'t freshly made to order, probably just packet pancakes put in the microwave. The full English breakfast wasn\'t the best. The bacon was hard and very very salty. They only gave us a cup of tea instead of a pot of tea, which wasn\'t great. I would rate it 2 stars but the cigarette smoke smell in the entrance room wasn\'t nice.'</p>
                <p className="fw-bold small mb-0">- Dougal Maps</p>
              </div>
              <div className="card-body bg-surface-variant text-on-surface-variant p-4">
                <p className="fw-bold text-on-surface mb-1">Response:</p>
                <p className="fst-italic small mb-0">'soz i like had like been having a like ciggaret in like the recepsion yester like day morning so like yeah JB'</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiCafeContactUs() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://thehighlandcafe.github.io/hioswebcore/mobile-sites/hienterprises/pics/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 font-caveat text-white animate-fade-in">Contact Us</h1>
        </div>
      </section>
      
      <section className="py-5 container">
        <div className="animate-fade-in">
          <h2 className="text-center fw-bold text-on-surface mb-4">Our Location</h2>
          <div className="ratio ratio-21x9 rounded-4 shadow-lg overflow-hidden border border-secondary">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?width=520&height=400&hl=en&q=%20Birmingham%20UK+()&t=p&z=10&ie=UTF8&iwloc=B&output=embed" title="Google Map of Birmingham"></iframe>
          </div>
        </div>
        
        <div className="row g-4 mt-5">
          <div className="col-lg-6">
            <div className="card h-100 bg-primary-container border-0 shadow-sm animate-fade-in">
              <div className="card-body text-center p-5 d-flex flex-column justify-content-center">
                <h3 className="h2 fw-bold text-primary mb-4">Contact Us</h3>
                <div className="fs-5 text-on-primary-container lh-lg">
                  <p className="mb-2">thehighlandcafe@email.com</p>
                  <p className="mb-4">01234 567890</p>
                  <p className="mb-0">The Highland Cafe,<br />Birmingham</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 bg-primary-container border-0 shadow-sm animate-fade-in delay-100">
              <div className="card-body text-center p-5 d-flex flex-column justify-content-center">
                <h3 className="h2 fw-bold text-primary mb-4">Opening Hours</h3>
                <div className="fs-5 text-on-primary-container lh-lg">
                  <p className="mb-1">Monday - Friday: 06:00 - 23:30</p>
                  <p className="mb-1">Saturday: 05:00 - 00:00</p>
                  <p className="mb-3">Sunday: 06:30 - 22:00</p>
                  <p className="small text-outline mb-0">Please note that we will not serve alcohol after 23:00 every evening except Sunday.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pb-5 container text-center">
        <div className="row justify-content-center g-5">
          <div className="col-lg-10">
            <div className="animate-fade-in mb-5">
              <img className="img-fluid rounded-4 shadow-lg mb-3 w-100" src="/assets/pics/hicafe/contact-us/restaurant.jpg" alt="Interior of a restaurant" />
              <p className="fst-italic text-on-surface-variant">Our restaurant supposedly</p>
              <h3 className="h3 text-on-surface mt-2">The best experience anyone ever feeled</h3>
            </div>
            <div className="animate-fade-in delay-100">
              <img className="img-fluid rounded-4 shadow-lg mb-3 w-100" src="/assets/pics/hicafe/contact-us/restaurant.jpg" alt="Interior of a restaurant" />
              <p className="fst-italic text-on-surface-variant">Caption for an image of the restaurant</p>
              <h3 className="h3 text-on-surface mt-2">Wonderful airy restaurants with friendly staff and lovely high standardized food</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiCafeChef() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://thehighlandcafe.github.io/hioswebcore/mobile-sites/hienterprises/pics/backdrop.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 font-caveat text-white animate-fade-in">Chef</h1>
        </div>
      </section>
      
      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="animate-fade-in mb-5">
              <h2 className="fw-bold text-on-surface mb-4">Our Philosophy</h2>
              <img className="img-fluid rounded-4 shadow-lg w-100 mb-3" src="/assets/pics/hicafe/chef/chef1.jpg" alt="A chef preparing food" />
              <p className="fst-italic text-on-surface-variant">Our chefs are artists.</p>
              <h3 className="h3 text-on-surface mt-3">They create the most wonderful food ever known to people. Enjoy the full on experience when visiting us.</h3>
            </div>
            
            <div className="animate-fade-in delay-100 mb-5">
              <img className="img-fluid rounded-4 shadow-lg w-100 mb-3" src="/assets/pics/hicafe/chef/chef2.jpg" alt="A chef at a barbecue" />
              <p className="fst-italic text-on-surface-variant">Cooking the BBQ</p>
              <h3 className="h3 text-on-surface mt-3">We mostly make British food.</h3>
            </div>

            <div className="animate-fade-in delay-200">
              <img className="img-fluid rounded-4 shadow-lg w-100 mb-3" src="/assets/pics/hicafe/chef/chef3.jpg" alt="A chef baking bread" />
              <p className="fst-italic text-on-surface-variant">Cooking the bread</p>
              <h3 className="h3 text-on-surface mt-3">
                <span className="text-decoration-underline fw-bold fst-italic">Who else works in the kitchen? Tell your viewers more about the chef's team. What does the cooking process look like?</span>
              </h3>
              <p className="fs-5 text-on-surface-variant mt-3">All our staff.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HiCafeMenu() {
  return (
    <main>
      <section className="hero-section" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/pics/hicafe/menu/menus.png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 font-caveat text-white animate-fade-in">Our Menu</h1>
        </div>
      </section>
      
      <section className="py-5 container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="animate-fade-in py-5">
              <h2 className="font-caveat display-3 text-title-yellow mb-4">View our menus below.</h2>
              <a href="https://www.dropbox.com/scl/fo/7gmlnnjcau1np91ee83ht/AJN5i_THAIhHAoMVKqtVZ_s?rlkey=33w724yp3xqnocswhk5o2xwqx&e=1&st=4zyb42da&dl=0" target="_blank" rel="noopener noreferrer" className="btn btn-nav-cta btn-lg px-5 py-3 rounded-pill shadow-lg hover-scale">
                Download the Menu Folder
              </a>
            </div>

            {/* Duplicate block from original code, maintained as requested */}
            <div className="animate-fade-in py-5">
              <h2 className="font-caveat display-3 text-title-yellow mb-4">View our menus below.</h2>
              <a href="https://www.dropbox.com/scl/fo/7gmlnnjcau1np91ee83ht/AJN5i_THAIhHAoMVKqtVZ_s?rlkey=33w724yp3xqnocswhk5o2xwqx&e=1&st=4zyb42da&dl=0" target="_blank" rel="noopener noreferrer" className="btn btn-nav-cta btn-lg px-5 py-3 rounded-pill shadow-lg hover-scale">
                Download the Menu Folder
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
