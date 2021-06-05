import React from "react";
import PropTypes from "prop-types";
import styles from "./RoundCompareCard.module.css";

const RoundCompareCard = () => (
  <div id="roundCompareCard">
    <div className="onboarding-text"> 
      Click on the button below to compare your result with your opponent
    </div>
    <button class="tr-ba-card">
      <img src={battle} alt="battle icon" />
      <h5 class="tr-ba-text mb-0">compare</h5>
    </button>
    <div className="cancel-selection"> Cancel </div>
  </div>
);

RoundCompareCard.propTypes = {};

RoundCompareCard.defaultProps = {};

export default RoundCompareCard;
