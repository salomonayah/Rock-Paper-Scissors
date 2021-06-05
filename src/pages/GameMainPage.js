import React from "react";
import ScoreboardCard from "../components/ScoreboardCard/ScoreboardCard";
import PlayerOptionCard from "../components/PlayerOptionCard/PlayerOptionCard";
import RoundStartCard from "../components/RoundStartCard/RoundStartCard";
import teddyRobot from "../assets/img/teddyRobot.jpeg";
import userProfile from "../assets/img/user.svg";
import battle from "../assets/img/battle.svg";
import award from "../assets/img/award.svg";

const selectHandSymbolText =  (
  <div className="onboarding-text"> Please choose one hand signal in your list.</div>
)

const compareResultText =  (
  <div>
    <div className="onboarding-text"> 
      <div> Click on the button below to compare your result with your opponent </div>
      <button  class="tr-ba-card">
          <img src={battle} alt="battle icon"/> <h5 class="tr-ba-text mb-0">compare</h5>
      </button>
      <div className="cancel-selection"> Cancel </div>
    </div>
  </div>
)


const RoundResult =  (
  <div>
    <div className="result-wrapper"> 
      <div className="player-selected-card">
        <button  class="tr-ba-card">
            <img src={battle} alt="battle icon"/> <h5 class="tr-ba-text mb-0">Paper</h5>
        </button>
        <div> Vs </div>
        <button  class="tr-ba-card">
            <img src={battle} alt="battle icon"/> <h5 class="tr-ba-text mb-0">Rock</h5>
        </button>
      </div>
    
      <div className="applied-rule">
        <div className="rule"> Scissors decapitates lizard. </div>
      </div>

      <div className="game-trophy">
        <img src={award} alt="battle icon"/>
      </div>

      <div className="winner-text">  TEDDY has winned this round ! </div>

    </div>
  </div>
)

const GameMainPage = () => (
  <div id="gameMainPage">
    <div className="tournament-question-container">
      <div className="player-and-battle-card">
        <PlayerOptionCard username="YOU" profileImage={userProfile} />
        <div className="round-info-wrapper">
          <ScoreboardCard />
          <RoundStartCard roundNumber={1} children={RoundResult} />
        </div>
        <PlayerOptionCard username="TEDDY" profileImage={teddyRobot} />
      </div>
    </div>
  </div>
);

GameMainPage.propTypes = {};

GameMainPage.defaultProps = {};

export default GameMainPage;
