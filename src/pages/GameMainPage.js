import React from "react";
import ScoreboardCard from "../components/ScoreboardCard/ScoreboardCard";
import PlayerOptionCard from "../components/PlayerOptionCard/PlayerOptionCard";
import RoundStartCard from "../components/RoundStartCard/RoundStartCard";
import RoundCompareCard from "../components/RoundCompareCard/RoundCompareCard";
import RoundResultCard from "../components/RoundResultCard/RoundResultCard";
import teddyRobot from "../assets/img/teddyRobot.jpeg";
import userProfile from "../assets/img/user.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import {appendIcon, initialGameState, loadState, saveState} from "../utils";
import {API_URL} from "../config";


const exitGame = () => {
  localStorage.clear()
  window.location.href = "/"
}

const GameMainPage = () => {

  const [handSymbolSelected, setHandSymbolSelected] = useState({})
  const [choiceStatus, setChoiceStatus] = useState(false)
  const [gameStatus, setGameStatus] = useState('starting')
  const [roundResult, setRoundResult] = useState({})
  const [robotChoice, setRobotChoice] = useState({})
  const [gameLocalState, setGameLocalState] = useState(initialGameState)

  useEffect(() => { 
    const activeGameState = loadState()
    setGameLocalState(activeGameState)
  }, [])
  

  const userSelectedHandSymbol = (handSymbol) => {
    console.log("userSelectedHandSymbol")
    console.log(handSymbol)
    setHandSymbolSelected(handSymbol)
    getRobotChoiceApi()
  } 
  const getRobotChoiceApi = async () => {
    try {
    
      const response = await axios.get(
        API_URL + "/choice"
      );
      
      const robotChoice = response.data;

      console.log("robotChoice")
      console.log(robotChoice)

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
        <RoundStartCard roundNumber={gameLocalState.roundScoreBoard.length} />
      )

    } else if(gameStatus === "handSymbolSelected")  {
      return (
        <RoundCompareCard 
          roundNumber={gameLocalState.roundScoreBoard.length}  
          compareEvent={() => postUserChoice(handSymbolSelected.id) }
        />
      )

    } else if(gameStatus === "showTheRoundResult")  {
      return (
        <RoundResultCard 
          roundNumber={gameLocalState.roundScoreBoard.length} 
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

    console.log("dataToSubmit")
    console.log(dataToSubmit)

    try {
      const response = await axios.post(API_URL + "/play", dataToSubmit);
      console.log(response.data)

      setGameStatus('showTheRoundResult')
      setRoundResult(response.data);
      scoreStateAction(response.data)
    } catch (error) {
      console.log({ error });
    }
  }

  const startTheNextRound = () => {
    setGameStatus('starting')
    setChoiceStatus(false)
    setHandSymbolSelected({})
    let activeGameState = loadState()
    activeGameState.roundScoreBoard.push({ winner : "", completed: false })
    setGameLocalState(activeGameState)
  }

  const scoreStateAction = (newRoundScore) => {

    let initGameLocalState = gameLocalState
    let roundScoreBoard = initGameLocalState.roundScoreBoard

    if(newRoundScore.results === 'win') {

      initGameLocalState.playersScores.userScore++
      initGameLocalState.playersScores.robotScore--

      roundScoreBoard.splice(-1,1)
      roundScoreBoard.push({ winner : "YOU", completed: true })

      initGameLocalState.roundScoreBoard = roundScoreBoard

      saveState(initGameLocalState)

    } else if(newRoundScore.results === 'lose') {


      initGameLocalState.playersScores.userScore--
      initGameLocalState.playersScores.robotScore++

      roundScoreBoard.splice(-1,1)
      roundScoreBoard.push({ winner : "TEDDY", completed: true })

      initGameLocalState.roundScoreBoard = roundScoreBoard

      saveState(initGameLocalState)

    } else if(newRoundScore.results === 'tie') {

      roundScoreBoard.splice(-1,1)
      roundScoreBoard.push({ winner : "TIE", completed: true })

      initGameLocalState.roundScoreBoard = roundScoreBoard

      saveState(initGameLocalState)
    }
  }

  return (
    <div id="gameMainPage">
    {gameLocalState?.roundScoreBoard?.length && (
      <div className="tournament-question-container">
        <div className="player-and-battle-card" >

            <PlayerOptionCard 
              gameRound={gameLocalState.roundScoreBoard.length} 
              username="YOU" 
              profileImage={userProfile}  
              handSymbolClickEvent={userSelectedHandSymbol}
              choiceDone={choiceStatus}
              userPoint={gameLocalState.playersScores.userScore}
              handSymbolSelected={handSymbolSelected}
            />
      
          <div  className={ `round-info-wrapper ${ !choiceStatus ? 'hide-element' : 'show-element' }` } >
            <ScoreboardCard scoreList={gameLocalState.roundScoreBoard} />
            {displayTemplate(gameStatus)}
          </div>

          <PlayerOptionCard  
            gameRound={gameLocalState.roundScoreBoard.length}  
            clickNotAllowed={true}
            username="TEDDY" 
            profileImage={teddyRobot}
            choiceDone={choiceStatus} 
            userPoint={gameLocalState.playersScores.robotScore}
          />

        </div>
      </div>
    )}
      <div className="exit-text" onClick={exitGame} > Exit </div>
    </div>
  )
  
};

GameMainPage.propTypes = {};

GameMainPage.defaultProps = {};

export default GameMainPage;
