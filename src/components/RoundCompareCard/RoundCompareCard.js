import React from "react";
import battle from "../../assets/img/battle.svg";

const RoundCompareCard = ({roundNumber, compareEvent}) => (
  <div id="roundInfoCard">
    <div className="round-number">Round {roundNumber}</div>
    <div className="info-card">
      <div>
        <div id="roundCompareCard">
          <div className="onboarding-text"> 
            Click on the button below to compare.
          </div>
          <button className="tr-ba-card-btn" onClick={() => {compareEvent()}}>
            <img src={battle} alt="battle icon" />
            <h5 className="tr-ba-text mb-0">compare</h5>
          </button>
          {/* <div className="cancel-selection"> Cancel </div> */}
        </div>
      </div>
    </div>
  </div>



);

RoundCompareCard.propTypes = {};

RoundCompareCard.defaultProps = {};

export default RoundCompareCard;
