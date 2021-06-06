import React from "react";
import ScoreboardCard from "../components/ScoreboardCard/ScoreboardCard";
import PlayerOptionCard from "../components/PlayerOptionCard/PlayerOptionCard";
import RoundStartCard from "../components/RoundStartCard/RoundStartCard";
import RoundCompareCard from "../components/RoundCompareCard/RoundCompareCard";
import RoundResultCard from "../components/RoundResultCard/RoundResultCard";
import teddyRobot from "../assets/img/teddyRobot.jpeg";
import userProfile from "../assets/img/user.svg";
import { useState } from "react";
import axios from "axios";
import {appendIcon} from "../utils";
// import Spinner from "../components/Spinner/Spinner";
import {API_URL} from "../config";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const exitGame = () => {
  window.location.href = "/"
}

const GameMainPage = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  console.log("state value")
  console.log(state)

  const [handSymbolSelected, setHandSymbolSelected] = useState({})
  const [choiceStatus, setChoiceStatus] = useState(false)
  const [gameStatus, setGameStatus] = useState('starting')
  const [roundResult, setRoundResult] = useState({})
  const [robotChoice, setRobotChoice] = useState({})


  const userSelectedHandSymbol = (handSymbol) => {
    setHandSymbolSelected(handSymbol)
    getRobotChoiceApi()
  } 
  const getRobotChoiceApi = async () => {
    try {
    
      const response = await axios.get(
        API_URL + "/choice"
      );
      
      const robotChoice = response.data;

      if(robotChoice) {
        appendIcon(robotChoice)
        setRobotChoice(robotChoice)
        setChoiceStatus(true)
        setGameStatus('handSymbolSelected')
      }
  
    } catch (error) {
      console.log({ error });
    }
  };

  const displayTemplate = (gameStatus) => {

    if(gameStatus === "starting") {
      return (
        <RoundStartCard roundNumber={state.roundScoreBoard.length} />
      )

    } else if(gameStatus === "handSymbolSelected")  {
      return (
        <RoundCompareCard 
          roundNumber={state.roundScoreBoard.length}  
          compareEvent={() => postUserChoice(handSymbolSelected.id) }
        />
      )

    } else if(gameStatus === "showTheRoundResult")  {
      return (
        <RoundResultCard 
          roundNumber={state.roundScoreBoard.length} 
          userHandSymbolName={handSymbolSelected.name}  
          userHandSymbolIcon={handSymbolSelected.icon}
          robotHandSymbolName={robotChoice.name}  
          robotHandSymbolIcon={robotChoice.icon}
          roundResult={ roundResult.results }
          nextRoundEvent={ () => startTheNextRound(handSymbolSelected.id)  } 
        />
      )

    }

  }

  const postUserChoice = async (data) => {
    const dataToSubmit = {
      player: data 
    }
    
    try {
      const response = await axios.post(API_URL + "/play", dataToSubmit);
      console.log(response.data)

      setGameStatus('showTheRoundResult')
      setRoundResult(response.data);
    } catch (error) {
      console.log({ error });
    }
  }

  const startTheNextRound = () => {
    setGameStatus('starting')
    setChoiceStatus(false)
    setHandSymbolSelected({})
  }

  return (
    <div id="gameMainPage">
      <div className="tournament-question-container">
        <div className="player-and-battle-card">

          <PlayerOptionCard 
            gameRound={state.roundScoreBoard.length} 
            username="YOU" 
            profileImage={userProfile}  
            handSymbolClickEvent={userSelectedHandSymbol}
            choiceDone={choiceStatus}
            userPoint={state.playersScores.userScore}
            handSymbolSelected={handSymbolSelected}
          />

          <div className="round-info-wrapper">
            <ScoreboardCard /> 
            {displayTemplate(gameStatus)}
          </div>

          <PlayerOptionCard  
            gameRound={state.roundScoreBoard.length}  
            clickNotAllowed={true}
            username="TEDDY" 
            profileImage={teddyRobot}
            choiceDone={choiceStatus} 
            userPoint={state.playersScores.robotScore}
          />

        </div>
      </div>

      <div className="exit-text" onClick={exitGame} > Exit </div>
    </div>
  )
  
};

GameMainPage.propTypes = {};

GameMainPage.defaultProps = {};

export default GameMainPage;
