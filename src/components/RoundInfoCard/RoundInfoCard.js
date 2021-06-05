import React from 'react';

const RoundInfoCard = ({ roundNumber, children }) => (
  <div id="#roundInfoCard">
    <div className="round-number">Round {roundNumber}</div>

    <div className="question-card">

      <div>{children}</div>
      
    </div>
  </div>
);

RoundInfoCard.propTypes = {};

RoundInfoCard.defaultProps = {};

export default RoundInfoCard;
