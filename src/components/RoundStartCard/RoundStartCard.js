import React from "react";

const RoundStartCard = ({ roundNumber, children }) => (
  <div id="RoundStartCard">
    <div className="round-number">Round {roundNumber}</div>

    <div className="question-card">

      <div>{children}</div>
      
    </div>
  </div>
);

RoundStartCard.propTypes = {};

RoundStartCard.defaultProps = {};

export default RoundStartCard;
