import React from "react";
import MapSolo from "../components/MapSolo";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";


const Home = () => (
  <div>
    <MapSolo />
    <Container>
      <Row>
        <Col size="md-12">
          <Carousel className="w-100" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
