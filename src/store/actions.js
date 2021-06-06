import { CHANGE_PLAYERS_POINT, REGISTER_ROUND_SCORE } from './constants'


export const editPlayersPoint = (dispatch, payload) => {
  dispatch({ type: CHANGE_PLAYERS_POINT, payload: payload })
}

export const registerNewRoundPoint = (dispatch, payload) => {
  dispatch({ type: REGISTER_ROUND_SCORE, payload: payload })
}

