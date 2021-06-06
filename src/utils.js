
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

