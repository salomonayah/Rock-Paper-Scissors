import React from "react";
import RuleResume from "../components/RuleResume/RuleResume";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import { useEffect } from "react";
import { initialGameState, saveState} from "../utils";

const GameWelcomePage = () => {

  useEffect(() => { 
    saveState(initialGameState)
  }, [])
  
  return (
    <div id="welcome-page">
      <div className="welcome-page-container">
        <WelcomeMessage />
        <RuleResume />
        <div className="start-btn-wrapper">
          <a href="/game" className="btn hvr-float-shadow">Let's start now !</a>
        </div>
      </div>
    </div>
  )
}

GameWelcomePage.propTypes = {};

GameWelcomePage.defaultProps = {};

export default GameWelcomePage;
