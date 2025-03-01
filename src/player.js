import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card>
      <div className="headerStyle">{name}</div>
      <Card.Img variant="top" src={image} alt={name} className="imageStyle" />
      <div className="infoStyle">
        <div className="attributeStyle bg-white px-2 py-1 rounded">
          <span>Equipe</span>
          <span>{team}</span>
        </div>
        <div className="attributeStyle bg-white px-2 py-1 rounded">
          <span>Pays</span>
          <span>{nationality}</span>
        </div>
        <div className="attributeStyle bg-white px-2 py-1 rounded">
          <span>Numéro</span>
          <span>{jerseyNumber}</span>
        </div>
        <div className="attributeStyle bg-white px-2 py-1 rounded">
          <span>Age</span>
          <span>{age}</span>
        </div>
      </div>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationnalité inconnue",
  jerseyNumber: 0,
  age: 20,
  image:
    "https://contents.mediadecathlon.com/p2307094/k$8af5227b499d3006c8301849f8b48f55/1920x0/1586pt1586/3171xcr1784/ballonclubligue1.jpg?format=auto",
};

export default Player;
