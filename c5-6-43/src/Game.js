import React, { Component } from "react"

class Game extends Component {
   constructor(props) {
      super(props)
      this.state = {
         animal: this.props.animal,
         food: this.props.food,
         score: 0,
         gameOver: false
      }
   }
   render() {
      if (!this.state.gameOver) {
         return (
            <div>
               <div>The game is not over Yet!</div>
               <div>Your Score is: {this.state.score}</div>
               <div>The animal is: {this.state.animal}</div>
            </div>
         )
      }
      else {
         return(
            <div>
            <div>The game is over Now!</div>
            <div>Your Score is: {this.state.score}</div>
            <div>The animal is: {this.state.animal}</div>
         </div>
         )
      }
   }
}

export default Game