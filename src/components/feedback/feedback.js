import React from "react";

class Feedback extends React.Component{

   onIncrement = event => {
      console.log(event.target);
   }

   render(){
      return(
<div>
   <h1>Please leave feedback</h1>
  <div>
   <button type="button" onClick={this.onIncrement}>Good</button>
   <button type="button" onClick={this.onIncrement}>Neutral</button>
   <button type="button" onClick={this.onIncrement}>Bad</button>
  </div>
  <div>
   <p>Good:
      <span></span>
   </p>
   <p>Neutral:
      <span></span>
   </p>
   <p>Bad:
      <span></span>
   </p>
  </div>
   </div>
      )
   }
}

export default Feedback