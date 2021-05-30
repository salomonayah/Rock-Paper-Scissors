import React from 'react';
import { Link } from 'react-router-dom';
import teddyRobot from '../assets/img/teddyRobot.jpeg';

const GameWelcomePage = () => (
  <div>
      <div className="news">


        <h2 className="news-title">Welcome to the game ! </h2>
 
        <div className="robot-wrapper">
            <img src={teddyRobot} alt="Teddy the game robot" className="" />
        </div>
        <p className="news-desc"> Hey! My name is <b>Teddy</b>, I'm the game robot! </p> 
        <p className="news-desc">
        In this game each player will choose a hand symbol at the same time. The strongest hand symbol will win the game round.
        </p> 
        <p className="news-desc"> <b>Here is some examples :</b></p> 
        
        
        <h4 className="news-title">Ready to challenge me ?</h4>
        <Link className="btn btn-primary hvr-float-shadow " to="/news">Let's play now !</Link>
    
      </div>
  </div>
);

GameWelcomePage.propTypes = {};

GameWelcomePage.defaultProps = {};

export default GameWelcomePage;
