import React, { Component } from "react"
import "./Clicker.css"

class Clicker extends Component {
   constructor(props) {
      super(props)
      this.state = {
         num: 1,
      }
      this.randNum = this.randNum.bind(this)
   }
   randNum() {
      var myRandNum = Math.floor(Math.random() * 10)
      this.setState({ num: myRandNum })
   }
   render() {
      if (this.state.num !== 7) {
         return (
            <div>
               <h1>{this.state.num}</h1>
               <button className="Clicker-button" onClick={this.randNum}>Random Number</button>
            </div>
         )
      }
      else {
         return (
            <div>
               <h1>{this.state.num}</h1>
               <h2>{this.state.num === 7 && "You Win!"}</h2>
            </div>
         )
      }
   }
}

export default Clicker