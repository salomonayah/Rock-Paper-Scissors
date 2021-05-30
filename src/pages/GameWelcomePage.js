import React from "react";
import { Link } from "react-router-dom";
import RuleResume from "../components/RuleResume/RuleResume";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

const GameWelcomePage = () => (
  <div id="welcome-page">
    <div className="welcome-page-container">
      <WelcomeMessage />


      <RuleResume />
      <h4 className="news-title">Ready to play with me ?</h4>
      <Link className="btn btn-primary hvr-float-shadow " to="/news">
        Let's play now !
      </Link>
    </div>
  </div>
);

GameWelcomePage.propTypes = {};

GameWelcomePage.defaultProps = {};

export default GameWelcomePage;
