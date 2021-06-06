import React from "react";
import award from "../../assets/img/award.svg";
import { useEffect } from "react";

const ScoreboardCard = ( scoreList ) => { 

  const lastScore = scoreList.scoreList



  useEffect(() => { 

    const scoreboardScroll = setInterval(() => {

      const div = '#ScoreboardCard';
      const container = document.querySelector(div);
      if (container) {
        container.scrollLeft = 0;
        container.scrollLeft += 100 * lastScore.length;
        clearInterval(scoreboardScroll);
      }
  
    }, 500);

  }, [])
  

  return ( 
    <div id="ScoreboardCard">
      <div className="question-top-element-wrapper">

      {lastScore?.length && (
        
      
        <div
          className="question-number-container horizontal-scroll-wrapper"
          id="scrollManager"
        >

        {
          lastScore.map((roundScore, index) => (
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
      
      
      )}
      </div>
    </div>
    
  )
};

ScoreboardCard.propTypes = {};

ScoreboardCard.defaultProps = {};

export default ScoreboardCard;
