import React, { Component } from "react"

class Game_ExperimentalSyntax extends Component {

   state = {
      score: 99,
      gameOver: false
   }

   render() {
      return (
         <div>Your Score is: {this.state.score}</div>
      )
   }
}

export default Game_ExperimentalSyntax