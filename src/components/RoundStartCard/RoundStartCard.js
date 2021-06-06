import React from "react";

const RoundStartCard = ({roundNumber}) => {
  return (
    <div id="roundInfoCard">
      <div className="round-number">Round {roundNumber}</div>

      <div className="info-card">
        <div>
          <div id="roundStartCard">
            <div className="onboarding-text"> Please choose one hand signal in your list.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

RoundStartCard.propTypes = {};

RoundStartCard.defaultProps = {};

export default RoundStartCard;
