import React from "react";
import { Card, Row, Col, PageHeader } from "../components/HiMaterial"; // Ensure you copy your HiMaterial.jsx into the components folder
import brandPortfolio from "../assets/pics/home/brand-portfolio.png";

export default function Home() {
  return (
    <div className="container mt-4 mb-5">
      <Row className="mb-2">
        <Col size={12}>
          <PageHeader
            title="The Highland Cafe™ Enterprises"
            subtitle="Quality Food, At Its Best."
          />
        </Col>
      </Row>

      {/* Intro Card */}
      <Row>
        <Col size={12}>
          <Card
            className="text-center"
            title="The Highland Cafe™️ is a wonderful organization based in
          Birmingham, UK"
          >
            <p>We pride ourselves in making good quality experience!</p>
          </Card>
          <Card
            className="mt-2"
            title="We are the parent company of a variety of different brands, from
          hotel brands to supermarket brands!"
          >
            <div className="mt-4">
              <img
                className="img-fluid rounded-4 shadow-lg"
                src={brandPortfolio}
                alt="Brand Portfolio"
                style={{ maxWidth: "100%" }}
              />
              <p className="mt-3 small fst-italic">
                The Highland Cafe™ Enterprises' portfolio of brands, February
                2025
              </p>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Reviews Section */}
      <Row>
        <Col size={12}>
          <Card className="mt-2" title="Positive Brand Reviews">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "A No Internet popup keeps appearing, preventing me from
                  actually using the app."
                </p>
                <p className="fw-bold mt-auto mb-0">HiOS</p>
              </div>
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "The room was disgusting, Days Inn would be better than this
                  dump."
                </p>
                <p className="fw-bold mt-auto mb-0">WorstEastern™️</p>
              </div>
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "I bought a seemingly fresh pack of fruit one day, and the
                  next day it was rotting and mouldy!"
                </p>
                <p className="fw-bold mt-auto mb-0">FoodHall</p>
              </div>
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "Simply abismal, and horrendously overpriced"
                </p>
                <p className="fw-bold mt-auto mb-0">The Highland Cafe™️</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Portfolio Section */}
      <Row>
        <Col
      <section className="mb-5">
        <div className="text-center mb-4">
          <h2>Our Portfolio of Brands</h2>
          <p>
            We have a lot of brands under our company. Take a look below to
            explore them.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          <Card>
            <img
              src="/assets/pics/brands/hicafe.png"
              alt="HiCafe"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4 className="mt-3">HiCafe™</h4>
            <p>Our main restaurant brand, the food brand you know and love!</p>
          </Card>
          <Card>
            <img
              src="/assets/pics/hyped/hyped.png"
              alt="HYPED"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4 className="mt-3">HYPED</h4>
            <p>Elevated energy cafe, nightclub, and restaurant.</p>
          </Card>
          <Card>
            <img
              src="/assets/pics/brands/hiosmobile.png"
              alt="Harmony"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4 className="mt-3">HiOSMobile</h4>
            <p>Download HiOSMobile from here!</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
