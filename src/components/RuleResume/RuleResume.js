import React from "react";

const RuleResume = () => (
  <div id="rule-resume-card">
    <div className="container ">
      <div className=" bloc">

        <div className="activity-card hvr-bob" id="kidsgym">
          <h4 className="activity-title">
            <i
              data-option="rock"
              class="icon-option fa fa-hand-rock-o"
              aria-hidden="true"
            ></i>
            Rock
          </h4>

          <p className="activity-description">
            <span className="block-text"> Rock crushes lizard. </span>
            <span className="block-text"> Rock crushes scissors. </span>
            <br/>Rock wins against scissors or lizard, but loses to paper or Spock
          </p>
        </div>

        <div className="activity-card hvr-bob " id="babygym">
          <h4 className="activity-title">
            <i
              data-option="paper"
              class="icon-option fa fa-hand-paper-o"
              aria-hidden="true"
            ></i>
            Paper
          </h4>
          <p className="activity-description">
            <span className="block-text"> Paper covers rock. </span>
            <span className="block-text"> Paper disproves Spock. </span>
            <br/> Paper wins against rock and Spock, but loses to scissors and lizard.
          </p>
        </div>

        <div className="activity-card hvr-bob ">
          <h4 className="activity-title" id="airtramp">
            <i
              data-option="scissors"
              class="icon-option fa fa-hand-scissors-o"
              aria-hidden="true"
            ></i>
            Scissors
          </h4>
          <p className="activity-description">
            <span className="block-text"> Scissors cuts paper. </span>
            <span className="block-text"> Scissors decapitates lizard. </span>
            <br/> Scissors wins against paper and lizard, but loses to rock and Spock.
          </p>
        </div>

        <div className="activity-card hvr-bob ">
          <h4 className="activity-title" id="snoezelen">
            <i
              data-option="lizard"
              class="icon-option fa fa-hand-lizard-o"
              aria-hidden="true"
            ></i>
            Lizard
          </h4>
          <p className="activity-description">
            <span className="block-text"> Lizard poisons Spock. </span>
            <span className="block-text"> Lizard eats paper. </span>
            <br/> Lizard wins against paper or Spock, but loses to scissors and rock
          </p>
        </div>

        <div className="activity-card hvr-bob ">
          <h4 className="activity-title">
            <i
              data-option="spock"
              class="icon-option fa fa-hand-spock-o"
              aria-hidden="true"
            ></i>
            Spock
          </h4>
          <p className="activity-description">
            <span className="block-text">Spock smashes scissors.</span>
            <span className="block-text">Spock vaporizes rock.</span>
            <br/> Spock wins against rock or scissors, but loses to lizard and paper.
          </p>
        </div>

      </div>
    </div>
  </div>
);

RuleResume.propTypes = {};

RuleResume.defaultProps = {};

export default RuleResume;
