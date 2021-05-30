import React from "react";
import teddyRobot from "../../assets/img/teddyRobot.jpeg";

const WelcomeMessage = () => (
  <div id="welcome-message">
    <h2 className="title"> Rock-Paper-Scissors-Lizard-Spock ! </h2>

    <div className="robot-welcome-message-wrapper">
      <div className="robot-wrapper">
        <img src={teddyRobot} alt="Teddy the game robot" className="" />
      </div>

      <div className="robot-message">
        <p className="robot-presentation">
          Hey! My name is <b>Teddy</b>, I'm the game robot!
        </p>
        <p className="game-instruction-intro">
          In this game each player will choose a hand symbol at the same time.
          Regarding the game rules the strongest hand symbol will win the game
          round. <b>Here is some hands symbols and game rules:</b> 
        </p>
      </div>
    </div>
  </div>
);

WelcomeMessage.propTypes = {};

WelcomeMessage.defaultProps = {};

export default WelcomeMessage;
