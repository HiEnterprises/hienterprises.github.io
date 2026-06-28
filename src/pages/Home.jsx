import React from "react";
import { Card, Row, Col, PageHeader } from "../components/HiMaterial";
import { BrandCard, Footer } from "../components/Web";

import brandPortfolio from "../assets/pics/home/brand-portfolio.png";
import hicafe from "../assets/pics/brands/hicafe.png";
import cafefiesta from "../assets/pics/brands/cafefiesta.png";
import worsteastern from "../assets/pics/brands/worsteastern.png";
import hios from "../assets/pics/brands/hiosmobile.png";
import hicola from "../assets/pics/brands/hicola.png";
import hiparty from "../assets/pics/brands/hiparty.png";
import hitech from "../assets/pics/brands/hitech.png";
import rewards from "../assets/pics/brands/rewards.png";
import hyped from "../assets/pics/hyped/hyped.png";
import foodhall from "../assets/pics/brands/foodhall.png";
import nuggetdev from "../assets/pics/brands/nuggetdev.png";

export default function Home() {
  return (
    <div className="container mb-5">
      <Row className="mb-2">
        <Col size={12}>
          <PageHeader
            title="The Highland Cafe™ Enterprises"
            subtitle="Quality Food, At Its Best."
            className="mb-2"
          />
        </Col>
      </Row>

      {/* Intro Card */}
      <Row>
        <Col size={12}>
          <Card
            className="text-center"
            title={`The Highland Cafe™️ is a wonderful organization based in Birmingham, UK`}
          >
            <p>We pride ourselves in making good quality experience!</p>
          </Card>

          <Card
            className="mt-2"
            title={`We are the parent company of a variety of different brands, from hotel brands to supermarket brands!`}
          >
            <div className="mt-4">
              <img
                className="img-fluid roundedImage"
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
          <Card className="mt-2" title="Positive brand reviews">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {/* review cards */}
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "A No Internet popup keeps appearing, preventing me from
                  actually using the app."
                </p>
                <p className="fw-bold mt-auto mb-0">HiCafe App</p>
              </div>
              <div className="translucentAboutBox text-center">
                <div className="text-warning mb-3">★☆☆☆☆</div>
                <p className="fst-italic">
                  "The room was disgusting, Days Inn would be better than this
                  dump."
                </p>
                <p className="fw-bold mt-auto mb-0">weB&B</p>
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
        <Col size={12}>
          <Card className="mt-2" title="Our brands">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
              className="text-center"
            >
              <BrandCard
                imageSrc={hicafe}
                brandName="The Highland Cafe™"
                linkTo="/hicafe"
                buttonText="Visit HiCafe™"
              />
              <BrandCard
                imageSrc={cafefiesta}
                brandName="CafeFiesta™"
                linkTo="/cafefiesta"
                buttonText="Visit CafeFiesta™"
              />
              <BrandCard
                imageSrc={worsteastern}
                brandName="weB&B"
                linkTo="/worsteastern"
                buttonText="Visit weB&B"
              />
              <BrandCard
                imageSrc={hios}
                brandName="HiOS"
                linkTo="/hios"
                buttonText="Visit HiOS"
              />
              <BrandCard
                imageSrc={rewards}
                brandName="HiRewards"
                linkTo="/hirewards"
                buttonText="Visit HiRewards"
              />
              <BrandCard
                imageSrc={nuggetdev}
                brandName="nuggetdev"
                linkTo="/nuggetdev"
                buttonText="Visit nuggetdev"
              />
              <BrandCard
                imageSrc={hitech}
                brandName="HiTech"
                linkTo="/hitech"
                buttonText="Visit HiTech"
              />
              <BrandCard
                imageSrc={hyped}
                brandName="HYPED"
                linkTo="/hyped"
                buttonText="Visit HYPED"
              />
              <BrandCard
                imageSrc={hicola}
                brandName="Highland Cola™"
                linkTo="/hicola"
                buttonText="Visit HiCola™"
              />
              <BrandCard
                imageSrc={foodhall}
                brandName="FoodHall"
                linkTo="https://sites.google.com/view/hifoodhall"
                buttonText="Visit FoodHall"
              />
              <BrandCard
                imageSrc={hiparty}
                brandName="HiParty™"
                linkTo="https://sites.google.com/view/thehighlandparty"
                buttonText="Visit The Highland Party™"
              />
            </div>
          </Card>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
