import React from "react";
import { useState, useEffect } from "react";
import {API_URL} from "../../config";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import {appendIcon} from "../../utils";

const PlayerOptionCard = ({ username, profileImage, choiceDone, handSymbolSelected={}, clickNotAllowed, handSymbolClickEvent, userPoint }) => {

  const [availableChoices, setAvailableChoices] = useState([])

  useEffect(() => { 
    async function fetchChoices() {
      try {
        const response = await axios.get(
          API_URL + "/choices"
        );
        const choicesWithIcon = getHandSymbolWithIcon(response.data)
        setAvailableChoices(choicesWithIcon);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchChoices()
  }, [])
  
  const getHandSymbolWithIcon = (apiHandSymbolList) => {

    apiHandSymbolList.forEach( (handSymbol) => {
      appendIcon(handSymbol)
    })
      
    return apiHandSymbolList
  }

  const userSelectedHandSymbol = (handSymbol) => {
    handSymbolClickEvent(handSymbol)
  }

  const displayContent = () => {

    return ( 
      <div
        id="playerCard"
        className={ `${ choiceDone ? 'hide-element-card-player' : '' }` }
        style={{ pointerEvents: clickNotAllowed ? "none" : "pointer" }}
      >
        <div className="player-name">{username}</div>
        <div className="player-score">{userPoint} point (s)</div>

        <div className="playerOptionCard">
          <div className="assistant-profile-wrapper">
            <img
              src={profileImage}
              alt="player profile"
              className="player-profile"
            />
          </div>

          <div className="hand-symbol-wrapper">

          { (!choiceDone && availableChoices?.length)  && (
              <div className="answers-option">
                  {availableChoices?.map((handSymbol, index) => (
                      <div 
                        className={ `option ${ handSymbolSelected.id === handSymbol.id ? 'activeAnswer' : '' }` } 
                        onClick={ () => userSelectedHandSymbol(handSymbol)}
                        key={index}
                        >
                        <i className={ 'icon-option ' + handSymbol.icon } />
                        <span className="option-text"> {handSymbol.name} </span>
                      </div>
                    ))
                  }
              </div>
          )}

          {choiceDone && (
              <div className="answers-option">
                <span className="option-text"> Hand symbol selected ! </span>
              </div>
            )
          }


                
          </div>
      
        </div>
      </div>
    );
  }

  return <>{ availableChoices?.length ?  displayContent() : <Spinner /> }</>;
};

PlayerOptionCard.propTypes = {};

PlayerOptionCard.defaultProps = {};

export default PlayerOptionCard;
