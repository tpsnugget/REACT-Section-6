import React, {Component} from "react"

class BrokenClick extends Component{
   constructor(props){
      super(props)
      this.state = {
         clicked: false
      }
      this.handleClicked = this.handleClicked.bind(this)
   }
   handleClicked(){
      this.setState({clicked: !this.state.clicked})
   }
   render(){
      return(
         <div>
            <h1>{this.state.clicked ? "Clicked" : "Not Clicked"}</h1>
            <button onClick={this.handleClicked}>Click Me!!</button>
         </div>
      )
   }
}

export default BrokenClick