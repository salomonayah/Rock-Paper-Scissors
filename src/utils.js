
export const appendIcon = (handSymbol) => {
  const handSymbolName = handSymbol.name

  if (handSymbolName === "rock" ) {
    handSymbol.icon = "fa fa-hand-rock-o"

  } else if (handSymbolName === "paper" ) {
    handSymbol.icon = "fa fa-hand-paper-o"
  
  } else if (handSymbolName === "scissors" ) {
    handSymbol.icon = "fa fa-hand-scissors-o"

  } else if (handSymbolName === "lizard" ) {
    handSymbol.icon = "fa fa-hand-lizard-o"

  } else if (handSymbolName === "spock" ) {
    handSymbol.icon = "fa fa-hand-spock-o"
    
  }

}


export const initialGameState = {
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

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return saveState(initialGameState);
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return saveState(initialGameState);
  }
}; 

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};