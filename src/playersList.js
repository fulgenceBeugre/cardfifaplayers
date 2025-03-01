import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./player";
import players from "./players";
const PlayersList = () => {
  return (
    <Container className="containerStyle">
      <h1 className="text-center mb-4">Cartes de joueurs de FIFA</h1>
      <Row className="justify-content-center">
        {players.map((player) => (
          <Col
            key={player.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center  mb-4"
          >
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
