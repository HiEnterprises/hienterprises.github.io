import React from "react";
import { Card, Row, Col, PageHeader } from "../components/HiMaterial";
import { Footer } from "../components/Web";

export default function Blog() {
  return (
    <div className="container mb-5">
      <Row className="mb-2">
        <Col size={12}>
          <PageHeader
            title="Our Blog"
            subtitle="Welcome to our new blog feed!"
          />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Card
            className="text-center mt-2"
            title="Company Updates & Statements"
          >
            <p>
              Take a look below to see updates, statements, and more from our
              fantastic company!
            </p>

            <div
              className="ratio border border-2 border-secondary rounded-4 shadow-lg overflow-hidden mx-auto"
              style={{
                minHeight: "80vh",
                aspectRatio: "1/1",
                width: "100%",
                maxWidth: "1000px",
              }}
            >
              <iframe
                src="https://hienterprises.blogspot.com/search/label/Company%20Update"
                title="Blog Feed"
                allowFullScreen
                style={{ border: "none", width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
