import { CHANGE_PLAYERS_POINT, REGISTER_ROUND_SCORE } from './constants'




const initialGameState = {
  playersScores : {
    userScore: 0,
    robotScore: 0
  },

  roundScoreBoard: [
    {
      winner: '',
      completed: false
    }
  ]
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return initialGameState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialGameState;
  }
}; 

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};


const updateGameScore = (state=loadState(), action={}) => {

  console.log(action)

  switch (action.type) {
    case CHANGE_PLAYERS_POINT:
      const playersScoresStateChange = { ...state, playersScores :  action.payload  }
      saveState(playersScoresStateChange)
      return playersScoresStateChange

    case REGISTER_ROUND_SCORE:
      const roundScoreBoardStateChange = { ...state, roundScoreBoard :  action.payload  }
      saveState(roundScoreBoardStateChange)
      return roundScoreBoardStateChange

    default:
      return state
  }


}

export default updateGameScore;