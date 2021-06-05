import React from "react";
import ScoreboardCard from "../components/ScoreboardCard/ScoreboardCard";
import PlayerOptionCard from "../components/PlayerOptionCard/PlayerOptionCard";
// import RoundStartCard from "../components/RoundStartCard/RoundStartCard";
import RoundInfoCard from "../components/RoundInfoCard/RoundInfoCard";
import teddyRobot from "../assets/img/teddyRobot.jpeg";
import userProfile from "../assets/img/user.svg";
import battle from "../assets/img/battle.svg";
import award from "../assets/img/award.svg";

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
        <img src={award} alt="battle icon" className="trophy"/>
      </div>

      <div className="winner-text">  TEDDY has winned this round ! </div>

      <div className="next-btn-wrapper">
        <button className="btn">Next round</button>
      </div>

    </div>
  </div>
)

const exitGame = () => {
  window.location.href = "/"
}

const GameMainPage = () => {

  return (
    <div id="gameMainPage">
      <div className="tournament-question-container">
        <div className="player-and-battle-card">
          <PlayerOptionCard username="YOU" profileImage={userProfile} />
          <div className="round-info-wrapper">
            <ScoreboardCard />
            <RoundInfoCard roundNumber={1} children={RoundResult} />
          </div>
          <PlayerOptionCard clickNotAllowed={true} username="TEDDY" profileImage={teddyRobot} />
        </div>
      </div>

      <div className="exit-text" onClick={exitGame} > Exit </div>
    </div>
  )
  
};

GameMainPage.propTypes = {};

GameMainPage.defaultProps = {};

export default GameMainPage;
