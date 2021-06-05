import React from 'react';
import PropTypes from 'prop-types';
import styles from './Scoreboard.module.css';

const SingleRoundScore = () => (
  <div className={styles.Scoreboard}>
    
    <div className="round-winner">
      <div className="round-number">Round 1</div>
      <div className="winner-text">
        <img src={award} alt="battle icon" className="winner-trophy"/>
      </div>
      <div className="player-winner">YOU</div>
    </div>
  </div>
);

Scoreboard.propTypes = {};

Scoreboard.defaultProps = {};

export default SingleRoundScore;
