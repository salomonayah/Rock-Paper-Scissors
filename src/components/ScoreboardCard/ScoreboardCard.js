import React from "react";
import award from "../../assets/img/award.svg";

const ScoreboardCard = () => (
  <div id="ScoreboardCard">
    <div className="question-top-element-wrapper">
      <div
        className="question-number-container horizontal-scroll-wrapper"
        id="scrollManager"
      >
        <div className="round-winner">
          <div className="round-number">Round 1</div>
          <div className="winner-text">
            <img src={award} alt="battle icon" className="winner-trophy"/>
          </div>
          <div className="player-winner">YOU</div>
        </div>
        <div className="round-winner">
          <div className="round-number">Round 1</div>
          <div className="winner-text">
            <img src={award} alt="battle icon" className="winner-trophy"/>
          </div>
          <div className="player-winner">YOU</div>
        </div>
        <div className="round-winner activeRoundNumber">
          <div className="round-number">Round 1</div>
          <div className="winner-text"> Ongoing </div>
        </div>
        
      </div>
    </div>
  </div>
);

ScoreboardCard.propTypes = {};

ScoreboardCard.defaultProps = {};

export default ScoreboardCard;
