import React from "react";
import award from "../../assets/img/award.svg";
import { useSelector } from "react-redux";


const ScoreboardCard = () => {

  const state = useSelector(state => state);

  return ( 
    <div id="ScoreboardCard">
      <div className="question-top-element-wrapper">
        <div
          className="question-number-container horizontal-scroll-wrapper"
          id="scrollManager"
        >

        {
          state.roundScoreBoard.map((roundScore, index) => (
            <div 
              key={ index }
              className={ `round-winner ${ !roundScore.completed ? 'activeRoundNumber' : '' }` }
              >

              <div className="round-number">Round {index+1}</div>

              {!roundScore.completed && (
                  <div className="winner-text"> Ongoing </div>
              )}

              {roundScore.completed && (
                  <> 
                    <div className="winner-text">
                      <img src={award} alt="battle icon" className="winner-trophy"/>
                    </div>
                    <div className="player-winner">{roundScore.winner}</div>
                  </>
              )}
            </div>
          ))
        }
          
        </div>
      </div>
    </div>
    
  )
};

ScoreboardCard.propTypes = {};

ScoreboardCard.defaultProps = {};

export default ScoreboardCard;
