import React from "react";

const PlayerOptionCard = ({ username, profileImage }) => (
  <div id="playerCard">
    <div className="player-name">{username}</div>
    <div className="player-score">{0} point (s)</div>

    <div className="playerOptionCard">
      <div className="assistant-profile-wrapper">
        <img
          src={profileImage}
          alt="player profile"
          className="player-profile"
        />
      </div>

      <div className="hand-symbol-wrapper">
        <div className="answers-option">
          <div className="option activeAnswer">
            <span className="option-text">
              <i
                data-option="rock"
                className="icon-option fa fa-hand-rock-o"
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <div className="option">
            <span className="option-text">
              <i
                data-option="paper"
                className="icon-option fa fa-hand-paper-o"
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <div className="option">
            <span className="option-text">
              <i
                data-option="scissors"
                className="icon-option fa fa-hand-scissors-o"
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <div className="option">
            <span className="option-text">
              <i
                data-option="lizard"
                className="icon-option fa fa-hand-lizard-o"
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <div className="option">
            <span className="option-text">
              <i
                data-option="spock"
                className="icon-option fa fa-hand-spock-o"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
);

PlayerOptionCard.propTypes = {};

PlayerOptionCard.defaultProps = {};

export default PlayerOptionCard;
