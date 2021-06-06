import React from "react";
import award from "../../assets/img/award.svg";

const RoundResultCard = ({roundNumber, userHandSymbolName,  userHandSymbolIcon, robotHandSymbolName, robotHandSymbolIcon, roundResult, nextRoundEvent }) => (

  <div id="roundInfoCard">
  <div className="round-number">Round {roundNumber}</div>

  <div className="info-card">
    <div>
    <div id="roundResultCard">
        <div className="result-wrapper">
          <div className="player-selected-card">
            <button className="tr-ba-card">
              <i className={ 'icon-option ' +  userHandSymbolIcon } />
              <h5 className="tr-ba-text mb-0">{userHandSymbolName}</h5>
            </button>
            <div> Vs </div>
            <button className="tr-ba-card">
              <i className={ 'icon-option ' +  robotHandSymbolIcon } />
              <h5 className="tr-ba-text mb-0">{robotHandSymbolName}</h5>
            </button>
          </div>

          <div className="game-trophy">
            <img src={award} alt="battle icon" className="trophy" />
          </div>

          {(roundResult === 'win') && (
            <div className="winner-text"> You have winned this round ! </div>
          )}

          {(roundResult === 'lose')  && (
            <div className="winner-text"> TEDDY has winned this round ! </div>
          )}


          {(roundResult === 'tie')  && (
            <div className="winner-text"> This round is a tie ! </div>
          )}

          <div className="next-btn-wrapper">
            <button onClick={ nextRoundEvent } className="btn"> Ok </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
);

RoundResultCard.propTypes = {};

RoundResultCard.defaultProps = {};

export default RoundResultCard;
