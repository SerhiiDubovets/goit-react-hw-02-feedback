import React from "react";

const Controls = ({state }) => {
   return <div>
   {Object.keys(this.state).map(key => {<button key={key}></button>})}
   {/* <button type="button" onClick={onIncrementGood}>Good</button>
   <button type="button" onClick={onIncrementNeutral}>Neutral</button>
   <button type="button" onClick={onIncrementBad}>Bad</button> */}
  </div> 
}

export default Controls;