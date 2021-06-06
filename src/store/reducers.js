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

const updateGameScore = (state=initialGameState, action={}) => {
  switch (action.type) {
    case CHANGE_PLAYERS_POINT:
      return Object.assign({}, state, {playersScores: action.payload})
    case REGISTER_ROUND_SCORE:
      return Object.assign({}, state, {roundScoreBoard: action.payload})
    default:
      return state
  }
}

export default updateGameScore;